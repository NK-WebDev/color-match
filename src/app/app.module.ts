import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { BubbleNavigationModule } from "nativescript-bubble-navigation/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { BottomNavComponent } from "./components/bottom-nav/bottom-nav.component";
import { AboutComponent } from "./pages/about/about.component";
import { ScoresComponent } from "./pages/scores/scores.component";
import { GameComponent } from "./pages/game/game.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule, BubbleNavigationModule],
    declarations: [
        AppComponent,
        HomeComponent,
        BottomNavComponent,
        AboutComponent,
        ScoresComponent,
        GameComponent
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
