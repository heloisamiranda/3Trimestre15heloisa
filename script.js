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
            1.7,

            ],
            backgroundcolor:[
                "rgb(255, 250, 205)",
                "rgb(106, 90, 205)",
                "rgb(65, 105, 225)",
                "rgb(0, 255, 255)",
                "rgb(32, 178, 170)",
                "rgb(60, 179, 113)",
                "rgb(75, 0, 130)",
                "rgb(255, 0, 255)",
                "rgb(221, 160, 221)",
                "rgb(220, 20, 60)",

            ]
        }]
    }
}
)