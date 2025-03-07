document.addEventListener("DOMContentLoaded", function () {
    let music = document.getElementById("music");
    let playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            playButton.innerHTML = "⏸ Pause";
        } else {
            music.pause();
            playButton.innerHTML = "❤️ Play";
        }
    });

    // Efek Salju
    function createSnowflake() {
        let snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.innerHTML = "❄";
        document.getElementById("snow").appendChild(snowflake);

        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 200);
});

// CSS untuk efek salju
const snowflakeStyle = document.createElement("style");
snowflakeStyle.innerHTML = `
    .snowflake {
        position: fixed;
        top: 0;
        font-size: 20px;
        color: white;
        opacity: 0.8;
        animation: fall linear infinite;
    }
    @keyframes fall {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(snowflakeStyle);