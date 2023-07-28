const multer = require('../src/utils/multer');
const uploads = multer.images;

const multipleUpload = uploads.fields([
    { name: 'supportingImg', maxCount: 1 },
    { name: 'companyPanImg', maxCount: 1 },
    { name: 'gstImg', maxCount: 1 },
    { name: 'deedImg', maxCount: 1 },
    { name: 'licenseImg', maxCount: 1 },
    { name: 'fssaiImg', maxCount: 1 },
    { name: 'itrImg', maxCount: 1 },
]);

const multipleUploadPrivate = uploads.fields([
    { name: 'supportingImg', maxCount: 1 },
    { name: 'companyPanImg', maxCount: 1 },
    { name: 'gstImg', maxCount: 1 },
    { name: 'cinImg', maxCount: 1 },
    { name: 'fssaiImg', maxCount: 1 },
    { name: 'itrImg', maxCount: 1 },
]);

const multipleUploadSole = uploads.fields([
    { name: 'supportingImg', maxCount: 1 },
    { name: 'companyPanImg', maxCount: 1 },
    { name: 'gstImg', maxCount: 1 },
    { name: 'licenseImg', maxCount: 1 },
    { name: 'fssaiImg', maxCount: 1 },
    { name: 'itrImg', maxCount: 1 },
]);

const multipleUploadParivar = uploads.fields([
    { name: 'aadharFrontImg', maxCount: 1 },
    { name: 'aadharBackImg', maxCount: 1 },
    { name: 'licenseImg', maxCount: 1 },
]);

const multipleUploadVehicle = uploads.fields([
    { name: 'smartCard', maxCount: 1 },
    { name: 'nationalImg', maxCount: 1 },
    { name: 'statePermitImg', maxCount: 1 },
    { name: 'insuranceImg', maxCount: 1 },
    { name: 'roadTaxImg', maxCount: 1 },
]);

const dashboard = uploads.fields([
    { name: 'smartCard', maxCount: 1 },
    { name: 'permitImg', maxCount: 1 },
    { name: 'insuranceImg', maxCount: 1 },
    { name: 'roadTaxImg', maxCount: 1 },
]);

//  const cheque = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 50
//     },
// }).single('cheque');

//  const profileImg = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 50
//     },
// }).single('profile');

//  const profile = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 50
//     },
// }).single('profile');

//  const panImage = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 50
//     },
// }).single('panImage');

//  const doc = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 50
//     },
// }).array('doc');

module.exports = {
    multipleUpload, multipleUploadPrivate, dashboard, multipleUploadVehicle, multipleUploadParivar, multipleUploadSole
}