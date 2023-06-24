let myChart = document.getElementById("myChart").getContext("2d");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const labels = data.map((item) => item.day);
    const expenditure = data.map((item) => item.amount);

    Chart.defaults.font.family = "DM Sans";
    Chart.defaults.font.size = 14;
    Chart.defaults.color = "#93867b";
    Chart.defaults.plugins.title.color = "#382314";

    let expenseChart = new Chart(myChart, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Expense",
            data: expenditure,
            backgroundColor: [
              "#ec775f",
              "#ec775f",
              "#76b5bc",
              "#ec775f",
              "#ec775f",
              "#ec775f",
              "#ec775f",
            ],
            hoverBackgroundColor: [
              "#FF8B87",
              "#FF8B87",
              "#8fdde6",
              "#FF8B87",
              "#FF8B87",
              "#FF8B87",
              "#FF8B87",
            ],
            borderRadius: 5,
            barPercentage: 1, // Modify the bar width as desired (80% of the available space)
            categoryPercentage: 0.7, // Modify the spacing between bars as desired (90% of the available space)
          },
        ],
      },
      options: {
        responsive: true, // Enable responsiveness
        maintainAspectRatio: false, // Disable aspect ratio locking
        plugins: {
          title: {
            display: true,
            text: "Spending - Last 7 days",
            align: "start",
            font: {
              size: 26,
            },
          },
          legend: {
            display: false,
          },


          

          tooltip: {
            xAlign: "center",
            callbacks: {
              label: function (context) {
                // Retrieve the expense value for the current data point
                var expenseValue = context.dataset.data[context.dataIndex];

                // Format and return the expense value as the tooltip label
                return "$" + expenseValue;
              },
              title: function () {
                // Return an empty string as the tooltip title to remove it
                return null;
              },
            },
          },
        },

        scales: {
          x: {
            grid: {
              display: false,
            },

            border: {
              display: false,
            },
          },

          y: {
            display: false,
            // grid:{
            //     display: false,
            // },

            // border:{
            //     display: false
            // },
          },
        },
      },
    });
  });
