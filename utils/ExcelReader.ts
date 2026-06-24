import ExcelJS from 'exceljs';

export class ExcelReader {

    static async getSheetData(sheetName: string) {

        const workbook = new ExcelJS.Workbook();

        await workbook.xlsx.readFile('./testData/TestData.xlsx');

        const worksheet = workbook.getWorksheet(sheetName);

        if (!worksheet) {
            throw new Error(`Sheet ${sheetName} not found`);
        }

        const data: any[] = [];

        const headers: string[] = [];

        worksheet.getRow(1).eachCell((cell) => {
            headers.push(cell.text);
        });

        worksheet.eachRow((row, rowNumber) => {

            if (rowNumber === 1) return;

            const rowData: any = {};

            headers.forEach((header, index) => {
                rowData[header] = row.getCell(index + 1).text;
            });

            data.push(rowData);
        });

        return data;
    }
}