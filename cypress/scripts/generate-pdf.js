const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const reportPath = `file://${path.resolve('cypress/reports/index.html')}`;

  await page.goto(reportPath, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'cypress/reports/report.pdf',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();

  console.log('✅ PDF generado correctamente');
}

generatePDF();
