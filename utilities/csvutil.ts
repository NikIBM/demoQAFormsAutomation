import fs from 'fs';
import csv from 'csv-parser';

export class CsvUtil {
  static async getRowData(
    filePath: string,
    testCaseId: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const results: any[] = [];

      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          const row = results.find(
            r => r.TestCaseID === testCaseId
          );
          resolve(row);
        })
        .on('error', reject);
    });
  }
}