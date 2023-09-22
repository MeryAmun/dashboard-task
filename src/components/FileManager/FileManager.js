import { FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import * as React from 'react';



const FileManager = () => {
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    return (
    <div className="control-section w-100">
    <FileManagerComponent id="file" ajaxSettings={{
        url: hostUrl + "api/FileManager/FileOperations"
    }}/>
</div>);
}
export default FileManager;