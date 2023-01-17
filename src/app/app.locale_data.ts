import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

import localeEsAR from '@angular/common/locales/es-AR';
import localeEsARExtra from '@angular/common/locales/extra/es-AR';

registerLocaleData(localeEs, localeEsExtra);
registerLocaleData(localeEsAR, localeEsARExtra);
