# Build Instructies voor BirdFrontEnd

## Beschikbare Build Commands

### 1. Normale Development Build

```bash
npm run build
```

- Bouwt de applicatie in development modus
- Output gaat naar `dist/BirdFrontEnd`

### 2. Production Build naar Backend

```bash
npm run build:production
```

- Bouwt de applicatie in productie modus
- Optimalisaties: minificatie, tree-shaking, bundling
- **Output hashing UIT**: Bestandsnamen blijven vast (main.js, vendor.js, etc.) voor backend compatibiliteit
- Output gaat direct naar `../Backend/BirdAPI/ClientApp`
- Overschrijft bestaande bestanden maar wist de folder niet eerst

### 3. Clean Production Build naar Backend

```bash
npm run build:production:clean
```

- Wist eerst volledig de `../Backend/BirdAPI/ClientApp` folder
- Bouwt daarna de applicatie in productie modus
- Output gaat naar `../Backend/BirdAPI/ClientApp`
- Gebruik dit voor een volledig verse build

## Configuratie Details

### Angular.json

- **Default outputPath**: `dist/BirdFrontEnd` (voor development)
- **Production outputPath**: `../Backend/BirdAPI/ClientApp` (voor backend integratie)

### Environment Configuratie

- **Development**: `environment.ts` met `webApiBaseUrl: 'http://localhost:5254/api/v1'`
- **Production**: `environment.prod.ts` met `webApiBaseUrl: '/api/v1'` (relatieve URL voor backend serving)

## Workflow

1. **Voor lokale development**: Gebruik `npm start` of `ng serve`
2. **Voor backend testing**: Gebruik `npm run build:production`
3. **Voor complete fresh deploy**: Gebruik `npm run build:production:clean`

## Voordelen van deze Setup

- ✅ Snellere deployment workflow
- ✅ Automatische overschrijving van backend ClientApp
- ✅ Productie optimalisaties (minificatie, tree-shaking)
- ✅ **Vaste bestandsnamen** (geen hashing) voor backend compatibiliteit
- ✅ Correcte environment configuratie voor productie
- ✅ Cross-platform compatible cleaning script

## Belangrijke Configuratie Notes

- **Output Hashing is UIT**: `"outputHashing": "none"` zodat backend de juiste bestanden kan vinden (main.js, vendor.js, background.png, etc.)
- **Environment URLs**: Development gebruikt localhost, productie gebruikt relatieve URLs
