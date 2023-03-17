#! /usr/bin/env node
import chalk from "chalk";
import showBanner from "node-banner";
async function myBanner() {
    await showBanner("\t\nOop_MyBank", chalk.blue("Welcome!"), "green");
}
await myBanner();
class Transaction {
    Account_No;
    PIN;
    Account_Title;
    Account_Balance;
    constructor(acc_No, pin, name, acc_Bal) {
        this.Account_No = acc_No;
        this.PIN = pin;
        this.Account_Title = name;
        this.Account_Balance = acc_Bal;
    }
    Balance_Check() {
        if (this.Account_Balance < 0) {
            console.log(`\t> Insufficient Balance!`);
        }
        else {
            console.log(`\t> Your available Balance is ${this.Account_Balance}`);
        }
    }
    Cash_Deposit(amount) {
        this.Account_Balance += amount;
        console.log(`\t> Dear ${this.Account_Title}. Amount of ${amount} deposited successfully to your account ${this.Account_No}. Your new Balance is ${this.Account_Balance}.`);
    }
    Cash_Withdraw(amount) {
        if (amount > this.Account_Balance) {
            console.log(`\t> Insufficient Balance. Transaction stopped!`);
        }
        else {
            this.Account_Balance -= amount;
            console.log(`\t> Dear ${this.Account_Title}. Amount of ${amount} withdrawn successfully from your account ${this.Account_No}. Your available Balance is ${this.Account_Balance}.`);
        }
    }
}
let newTrans = new Transaction(102454646, 1234, "Ubaid", 25000);
setTimeout(() => {
    newTrans.Balance_Check();
    setTimeout(() => {
        newTrans.Cash_Deposit(10000);
        setTimeout(() => {
            newTrans.Cash_Withdraw(5000);
        }, 2000);
    }, 2000);
}, 2000);
