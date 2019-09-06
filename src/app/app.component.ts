import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "NgInternationalization";

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "pt"]);
    translate.setDefaultLang("en");
  }

  translateEnglish() {
    this.translate.use("en");
    console.log("Language changed! :)");
  }

  translatePortuguese() {
    this.translate.use("pt");
    console.log("Idioma modificado! :)");
  }
}
