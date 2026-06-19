const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  const outputDir = 'C:\\Users\\cparra\\cypress\\reportes';
  const outputPDF = path.join(outputDir, 'Reporte_Fundanatura_QA.pdf');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const reportPath = `file://${path
    .resolve('cypress/reports/index.html')
    .replace(/\\/g, '/')}`;

  await page.goto(reportPath, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: outputPDF,
    format: 'A4',
    printBackground: true,
  });

  await browser.close();

  console.log(`✅ PDF generado correctamente en: ${outputPDF}`);
}

generatePDF();