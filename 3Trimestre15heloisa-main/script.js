const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart(grafico, {
    type: "pie",
    data: {
      labels: [
        "Instagram", 
        "WhatsApp", 
        "Facebook", 
        "WeChat", 
        "TikTok", 
        "DouYin", 
        "Twitter", 
        "Telegram", 
        "FB Messenger", 
        "LINE"
      ],
      datasets: [{
        data: [
          16.5, 
          16.1, 
          12.8, 
          12.8, 
          7.4, 
          6.6, 
          3.2, 
          2.4, 
          2.3, 
          1.7
        ],
        backgroundColor: [
                "rgb(255, 105, 180)",
                "rgb(50, 205, 50)",
                "rgb(0, 0, 225)",
                "rgb(0, 255, 127)",
                "rgb(75, 0, 105)",
                "rgb(70, 130, 180)",
                "rgb(30, 144, 255)",
                "rgb(135, 206, 235)",
                "rgb(127, 255, 0)",
                "rgb(220, 20, 60)",

            ]
        }]
    }
}
)