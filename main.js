const doGet = e => HtmlService.createTemplateFromFile('index').evaluate()

const getImageUrlById = id => DriveApp.getFileById(id).getDownloadUrl()
