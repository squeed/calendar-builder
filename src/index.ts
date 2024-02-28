import { jsPDF } from 'jspdf'
import 'svg2pdf.js'
import baseSVG from '../assets/calendar.svg'

function render() {
    const doc = new jsPDF();
}

function foo() {
    console.log("foo");
}

function init() {
    initSVG();
    // render();
}

function initSVG(){
    document.getElementById("svgContainer")?.insertAdjacentHTML("afterbegin", baseSVG)
}

init();