document.addEventListener('DOMContentLoaded', () => {
    // Fetch the data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Initial load with weekly data (active by default)
            updateDashboard(data, 'weekly');

            // Add event listeners to timeframe buttons
            const timeframeButtons = document.querySelectorAll('.timeframe-btn');
            timeframeButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active button
                    timeframeButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    // Update dashboard with selected timeframe
                    const timeframe = btn.getAttribute('data-timeframe');
                    updateDashboard(data, timeframe);
                });
            });
        })
        .catch(error => console.error('Error loading data:', error));
});

function updateDashboard(data, timeframe) {
    // Define timeframe text
    const timeframeText = {
        'daily': 'Yesterday',
        'weekly': 'Last Week',
        'monthly': 'Last Month'
    };

    // Loop through each activity
    data.forEach(activity => {
        // Convert title to lowercase for matching with classes
        const title = activity.title.toLowerCase().replace(' ', '-');
        const card = document.querySelector(`.activity-card.${title}`);

        if (card) {
            // Get the current and previous times
            const current = activity.timeframes[timeframe].current;
            const previous = activity.timeframes[timeframe].previous;

            // Format times with 'hr' or 'hrs' suffix
            const currentText = `${current}${current === 1 ? 'hr' : 'hrs'}`;
            const previousText = `${timeframeText[timeframe]} - ${previous}${previous === 1 ? 'hr' : 'hrs'}`;

            // Update the card content
            card.querySelector('.current-time').textContent = currentText;
            card.querySelector('.previous-time').textContent = previousText;
        }
    });
}