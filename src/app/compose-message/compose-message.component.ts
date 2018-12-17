import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-compose-message',
    templateUrl: './compose-message.component.html',
    styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {
    details: string;
    message: string;
    sending = false;

    constructor(private router: Router) {}

    ngOnInit() {}

    send() {
        this.sending = true;
        this.details = '消息发送中...';

        setTimeout(() => {
            this.sending = false;
            this.closePopup();
        }, 1000);
    }

    cancel() {
        this.closePopup();
    }

    closePopup() {
        // 为 router-outlet 的 name 提供 null，就会清空
        this.router.navigate([{ outlets: { popup: null } }]);
    }
}
