import { useRef, useEffect } from "react";
import styles from "./style.module.css";

const makeGraph = (canvas, data) => {
    canvas.canvas.height = canvas.canvas.clientHeight;
    canvas.canvas.width = canvas.canvas.clientWidth;
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    let totalElement = data.length - 1;

    let gradient = canvas.createLinearGradient(0, 0, 0, canvas.canvas.height);
    gradient.addColorStop(0, "rgba(10,25,49,1)");
    gradient.addColorStop(0.5, "rgba(10,25,49,.85)");
    gradient.addColorStop(1, "rgba(10,25,49,.50)");

    canvas.beginPath();
    canvas.moveTo(0, canvas.canvas.height);

    data.forEach((d, i) => {
        canvas.lineTo((canvas.canvas.width / totalElement) * i, (canvas.canvas.height / 100) * (100 - d));
    });

    canvas.lineTo(canvas.canvas.width, canvas.canvas.height);
    canvas.closePath();
    canvas.fillStyle = gradient;
    canvas.fill();
};

const showDetails = (event, graph, data, tooltip, unit) => {
    let canvas = graph.current.getContext("2d").canvas;
    let totalElement = data.length - 1;
    let date = new Date(Date.now()).toLocaleTimeString("en-US");
    let nearestpnt = Math.round(((event.pageX - canvas.parentElement.offsetLeft) / canvas.clientWidth) * totalElement);

    tooltip.current.style.left = nearestpnt * (canvas.clientWidth / totalElement) + "px";
    tooltip.current.style.bottom = data[nearestpnt] * (canvas.clientHeight / 100) + "px";
    tooltip.current.style.display = "flex";
    tooltip.current.children[1].innerHTML = date + " | " + data[nearestpnt] + unit;
};

const hideDetails = (tooltip) => {
    tooltip.current.style.display = "none";
};

export default function InstanceGraph({ data, unit }) {
    const graph = useRef(null);
    const tooltip = useRef(null);

    useEffect(() => {
        const canvas = graph.current.getContext("2d");
        makeGraph(canvas, data);
    }, [data]);

    return (
        <>
            <div className={styles.holder}>
                <div className={styles.tooltip} ref={tooltip}>
                    <div className={styles.bubble} />
                    <div className={styles.amount}>17:05 | 50%</div>
                </div>

                <canvas width="100%" heigth="100%" onPointerMove={(e) => showDetails(e, graph, data, tooltip, unit)} onMouseLeave={() => hideDetails(tooltip)} className={styles.graph} ref={graph}></canvas>
            </div>
        </>
    );
}
