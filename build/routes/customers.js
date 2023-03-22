"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('joi');
var express = require('express');
var router = express.Router();
var Models = require('../models/customerModel.ts');
var Customers = Models.Customer;
var getCustomer = require('../middlewares/getCustomer.ts');
var userSchema = require('../middlewares/userValidationSchema.ts');
var calculateInsurance = require('../utils/calculateInsurance.ts').calculateInsurance;
//GET ALL CUSTOMERS
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var customers, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Customers.find()];
            case 1:
                customers = _a.sent();
                res.json(customers);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({ message: err_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//GET ONE CUSTOMER
router.get('/:id', getCustomer, function (req, res) {
    res.json(res.customer);
});
//CREATE CUSTMOER
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, customer, newCustomer, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                error = userSchema.validate(req.body).error;
                if (error) {
                    return [2 /*return*/, res.status(400).send(error.details[0].message)];
                }
                customer = new Customers({
                    Email: req.body.Email,
                    Name: req.body.Name,
                    Surname: req.body.Surname,
                    City: req.body.City,
                    Birthday: req.body.Birthday
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, customer.save()];
            case 2:
                newCustomer = _a.sent();
                res.status(201).json(newCustomer);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                res.status(400).json({ message: err_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//UPDATE CUSTOMER
router.patch('/:id', getCustomer, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, allowedUpdates, updates, updatedCustomer, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                error = userSchema.validate(req.body).error;
                if (error) {
                    return [2 /*return*/, res.status(400).send(error.details[0].message)];
                }
                allowedUpdates = ['Email', 'Name', 'Surname', 'City', 'Birthday'];
                updates = {};
                Object.keys(req.body).forEach(function (key) {
                    if (allowedUpdates.includes(key)) {
                        updates[key] = req.body[key];
                    }
                });
                Object.assign(res.customer, updates);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, res.customer.save()];
            case 2:
                updatedCustomer = _a.sent();
                res.json(updatedCustomer);
                return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                res.status(400).json({ message: err_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//DELETE CUSTOMER
router.delete('/:id', getCustomer, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Customers.findOneAndRemove({ _id: req.params.id })];
            case 1:
                _a.sent();
                res.json({ message: 'Customer successfully removed' });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(500).json({ message: err_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//CALCULATE INSURANCE
router.get('/:id/calculate-insurance', getCustomer, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var currentCustomer, City, Birthday, insurancePrice, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentCustomer = res.customer;
                City = currentCustomer.City, Birthday = currentCustomer.Birthday;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, calculateInsurance(City, Birthday)];
            case 2:
                insurancePrice = _a.sent();
                res.json({ insurancePrice: insurancePrice });
                return [3 /*break*/, 4];
            case 3:
                err_5 = _a.sent();
                res.status(500).json({ message: err_5.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
