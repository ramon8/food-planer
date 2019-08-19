import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '@env/environment';
import { Language } from '@app/_models';
import { MediaScreenService } from './_services/media-screen.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    vwSize: number;

    constructor(
        private translateService: TranslateService,
        private mediaScreenService: MediaScreenService
    ) {

        // set languages
        this.translateService.addLangs(environment.languagesList.map((lang: Language) => lang.code));

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translateService.setDefaultLang(environment.defaultLanguage.code);

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translateService.use(environment.defaultLanguage.code);

        // set vwSize
        this.onResize();
    }

    ngOnInit(): void { }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
        this.vwSize = this.windowWith();
    }

    private windowWith(): number {
        return this.mediaScreenService.getWindowWith();
    }
}
