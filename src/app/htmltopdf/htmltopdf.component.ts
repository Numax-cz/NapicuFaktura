import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-htmltopdf',
  templateUrl: './htmltopdf.component.html',
  styleUrls: ['./htmltopdf.component.scss']
})
export class HtmltopdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public generatePDF(): void {
    window.scrollTo(0,0);
    const data = document.getElementById('kokot');
    console.log(data);
    if (!data) return;
    html2canvas(data).then(canvas => {
      
      var imgWidth = 208;

      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('newPDF.pdf');
    })

  }
}
