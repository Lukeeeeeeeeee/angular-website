import { ConfigService, Config } from './config.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
    styleUrls: ['./config.component.css'],
    providers: [ConfigService]
})
export class ConfigComponent implements OnInit {
    config: Config;
    headers: string[];
    error: any;

    constructor(private configService: ConfigService) {}

    ngOnInit() {}

    clear() {
        this.config = undefined;
    }

    showConfig_v1() {
        this.configService.getConfig().subscribe(
            (data: Config) =>
                (this.config = {
                    heroesUrl: data['heroesUrl'],
                    textfile: data['textfile']
                })
        );
    }

    showConfig_v2() {
        this.configService
            .getConfig()
            .subscribe((data: Config) => (this.config = { ...data }));
    }

    showConfig() {
        this.configService
            .getConfig()
            .subscribe(
                (data: Config) => (this.config = { ...data }),
                error => (this.error = error)
            );
    }

    showConfigResponse() {
        this.configService.getConfigResponse().subscribe(resp => {
            console.log(resp);
            const keys = resp.headers.keys();
            this.headers = keys.map(key => `${key}：${resp.headers.get(key)}`);

            this.config = { ...resp.body };
        });
    }
}
