import { Component , Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  donate: FormGroup;
  count :number = 0;
  donateNumber:number = 0;
  remaining: number = 0;
  money: number = 0;
  moneyValue : number = 0;
  showText: boolean;

  constructor(private fb: FormBuilder,
              public snackBar: MatSnackBar, 
              public dialog: MatDialog,         
            ){}

  ngOnInit()
  {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.donate = this.fb.group({
      money:    ['', Validators.required ],
    })
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogDialog, {
      width: '250px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
  number(f){
    console.log(f.value);
    this.donateNumber = Number(f.value.money);
  }


  donateMoney(f)
  { console.log(this.moneyValue);
    this.count++;
    if(this.moneyValue <= 100){
      console.log('Money Donated Value', f.value.money);
      this.money = this.money + Number(f.value.money);
      console.log('Total Money', this.money);
      this.remaining = 1000 - this.money;
      this.moneyValue = this.money/10;
    }
    else{
      this.snackBar.open('Thank You !','But we have reached required fund', {
        duration: 2000,
      });
    }
    
  }

}


@Component({
  selector: 'dialog',
  templateUrl: './dialog.html',
})
export class DialogDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
