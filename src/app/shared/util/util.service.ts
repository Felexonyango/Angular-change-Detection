import { DOCUMENT, Location } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { projectConstants } from '../constants/project.constants';

import * as fileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

export enum EToastActions {
  ERROR = 'ERROR',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING'
}

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  projectConstants = projectConstants;


  constructor(
    private titleService: Title,
    @Inject(DOCUMENT) private _document: Document,
    private location: Location,
    private router: Router,

  ) { }


  setDocTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  setDocFavicon(): void {
    const faviconId = 'appFavicon';
    const faviconDefaultPath = 'assets/img/brand';
    const favicon = projectConstants.favicon;
    this._document.getElementById(faviconId)?.setAttribute('href', `${faviconDefaultPath}/${favicon}`)
  }

  doesURLHaveText(text: string): boolean {
    const activeRoute = this.router.url;
    return activeRoute.includes(text) ? true : false;
  }

  goBack(): void {
    this.location.back();
  }
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    fileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

}
