import { Component } from '@angular/core';
import { WirelessServiceService } from './service/wfservice.service';
import { WfservicedatatableTsService } from './service/wfservicedatatable.ts.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Wirelessformviewdata: any;
  Wirelessformdatatabledata: any;
  Wirelessformdatatableheader: any;
  Wirelessformapprovalflow: any;
  title = 'v2_angularWF';
  disabled = true;
  // datatable
  table:any;
  constructor(private WFSERVICEVIEW: WirelessServiceService, private datatable: WfservicedatatableTsService, private approvalflow: WfservicedatatableTsService) {
    // viewhtml data
    this.WFSERVICEVIEW.getFormJsonData().subscribe((formviewhtml: any) => {
      this.Wirelessformviewdata = JSON.stringify(formviewhtml.results.formTemplateHtml);
      // console.log(this.Wirelessformviewdata);
      $('#newTemplateDataShow').append(formviewhtml.results.formTemplateHtml);
    })
    // data table
    this.datatable.getFormJsonDatatable().subscribe(
      (datatabledata: any) => {
        this.Wirelessformdatatabledata = datatabledata.results.data;
        //console.log(datatabledata.results.data);

      })
    this.datatable.getFormJsonDatatableheader().subscribe((datatableheader: any) => {
      this.Wirelessformdatatableheader = datatableheader.results.header;
      //$('#datatable').append(datatabledata.results.data);
      console.log(datatableheader.results.header);

    })
    // approvalflow
    this.approvalflow.getFormJsonDataapprovalflow().subscribe((approvalflowdata: any) => {
      this.Wirelessformapprovalflow = approvalflowdata.results.approvalStepsInfo;
      //$('#datatable').append(datatabledata.results.data);
      console.log(approvalflowdata.results.approvalStepsInfo);

    })
  }
  showViewForm() {
    const modal = document.getElementById('Viewwirelessform');
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  showViewcheckbox() {
    if ($(".viewcheckBox").is(":checked")) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
  getData(){
    
      this.Wirelessformdatatableheader.getFormJsonDataapprovalflow();
    

  }
  // const table = document.getElementById('#example');
 
  // table.('click', 'tbody tr', function () {
  //     let data = table.row(this).data();
   
  //     alert('You clicked on ' + data[0] + "'s row");
  // });

}
