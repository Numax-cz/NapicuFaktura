import { Component } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-htmltopdf',
  templateUrl: './htmltopdf.component.html',
  styleUrls: ['./htmltopdf.component.scss']
})
export class HtmltopdfComponent {
  constructor() { }
  public generatePDF(): void {
    window.scrollTo(0, 0);
    const data = document.getElementById('FakturaData');
    if (!data) return;
    html2canvas(data).then(canvas => {
      // var imgWidth = 208; 
      // var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/jpeg')
      let pdf = new jspdf('p', 'mm', 'a4');
      // var position = 0;
      // pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight)



      const imgProps= pdf.getImageProperties(contentDataURL);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, pdfWidth, pdfHeight);

      pdf.save('newPDF.pdf');
    });
  }
}
