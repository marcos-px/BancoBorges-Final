import { IFiles } from "./files.interface";
import xlsx from 'xlsx';

class XlsxFiles implements IFiles{
    parse(filename: string): any[] {
        const data = xlsx.readFile(filename);
        return xlsx.utils.sheet_to_json(data.Sheets[data.SheetNames[0]]);
    }
}

export default new XlsxFiles;