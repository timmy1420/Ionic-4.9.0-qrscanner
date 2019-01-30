import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-page',
  templateUrl: './qr-page.page.html',
  styleUrls: ['./qr-page.page.scss'],
})
export class QrPagePage implements OnInit {

  constructor(
    public qrScanner: QRScanner,
    private router: Router
  ) { }

  ngOnInit() {
    this.doIt();
  }

  doIt() { 
    // console.log('Yo');
    
    // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted
        // alert('authorized');

        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
          alert(text); // Show text in alert
          this.router.navigate(['/home']); // If Scanner has scanned the data go back
        });

        this.qrScanner.resumePreview();

        // show camera preview
        this.qrScanner.show()
        .then((data : QRScannerStatus)=> { 
          console.log('Data status', data);
          //alert(data.showing);
        },err => {
          alert(err);
        });
        // wait for user to scan something, then the observable callback will be called
      } else if (status.denied) {
        alert('denied');
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
        alert('else');
      }
    })
    .catch((e: any) => {
      alert('Error is' + e);
    });
  }

}
