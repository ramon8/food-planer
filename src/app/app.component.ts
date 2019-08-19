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
    languages: Language[];
    currentLanguage: Language;

    constructor(
        private translateService: TranslateService,
        private mediaScreenService: MediaScreenService
    ) {

        // set languages
        this.languages = environment.languagesList;
        this.translateService.addLangs(this.languages.map((lang: Language) => lang.code));

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translateService.setDefaultLang(environment.defaultLanguage.code);

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.currentLanguage = environment.defaultLanguage;
        this.translateService.use(environment.defaultLanguage.code);

        // set vwSize
        this.onResize();
    }

    ngOnInit(): void { }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
        this.vwSize = this.windowWith();
    }

    // change language button handler
    onLangClick(lang: Language): void {
        this.translateService.use(lang.code);
        this.currentLanguage = lang;
    }

    private windowWith(): number {
        return this.mediaScreenService.getWindowWith();
    }
}
