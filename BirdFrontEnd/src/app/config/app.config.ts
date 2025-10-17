export const APP_CONFIG = {
  // API Configuration
  api: {
    defaultPageSize: 50,
    maxPageSize: 1000,
    requestTimeout: 30000,
    retryAttempts: 2,
    retryDelay: 1000,
  },

  // UI Configuration
  ui: {
    toastTimeout: 4000,
    debounceTime: 300,
    animationDuration: 300,
    loading: {
      spinnerSize: '40px',
      strokeWidth: '4',
      animationDuration: '1s',
    },
  },

  // Form Configuration
  forms: {
    validation: {
      minNameLength: 2,
      maxNameLength: 100,
      maxDescriptionLength: 500,
      minCageNumberLength: 1,
    },
    debounceTime: 300,
  },

  // Date Configuration
  dates: {
    format: 'dd-MM-yyyy',
    displayFormat: 'DD/MM/YYYY',
    apiFormat: 'YYYY-MM-DD',
  },

  // Messages
  messages: {
    success: {
      coupleCreated: 'Koppel succesvol aangemaakt!',
      coupleUpdated: 'Koppel succesvol bijgewerkt!',
      coupleDeleted: 'Koppel succesvol verwijderd!',
      birdCreated: 'Vogel succesvol aangemaakt!',
      birdUpdated: 'Vogel succesvol bijgewerkt!',
      birdDeleted: 'Vogel succesvol verwijderd!',
      breederCreated: 'Kweker succesvol aangemaakt!',
      breederUpdated: 'Kweker succesvol bijgewerkt!',
      breederDeleted: 'Kweker succesvol verwijderd!',
      ownerCreated: 'Eigenaar succesvol aangemaakt!',
      ownerUpdated: 'Eigenaar succesvol bijgewerkt!',
      ownerDeleted: 'Eigenaar succesvol verwijderd!',
    },
    error: {
      coupleCreateFailed:
        'Er is een fout opgetreden bij het aanmaken van het koppel. Probeer het opnieuw.',
      coupleUpdateFailed:
        'Er is een fout opgetreden bij het bijwerken van het koppel. Probeer het opnieuw.',
      birdCreateFailed:
        'Er is een fout opgetreden bij het aanmaken van de vogel. Probeer het opnieuw.',
      birdUpdateFailed:
        'Er is een fout opgetreden bij het bijwerken van de vogel. Probeer het opnieuw.',
      breederCreateFailed:
        'Er is een fout opgetreden bij het aanmaken van de kweker. Probeer het opnieuw.',
      breederUpdateFailed:
        'Er is een fout opgetreden bij het bijwerken van de kweker. Probeer het opnieuw.',
      ownerCreateFailed:
        'Er is een fout opgetreden bij het aanmaken van de eigenaar. Probeer het opnieuw.',
      ownerUpdateFailed:
        'Er is een fout opgetreden bij het bijwerken van de eigenaar. Probeer het opnieuw.',
      networkError:
        'Kan geen verbinding maken met de server. Controleer uw internetverbinding.',
      unknownError: 'Er is een onbekende fout opgetreden. Probeer het opnieuw.',
      validationError: 'Controleer uw invoer en probeer opnieuw.',
    },
    loading: {
      loadingData: 'Gegevens laden...',
      saving: 'Opslaan...',
      updating: 'Bijwerken...',
      deleting: 'Verwijderen...',
    },
  },

  // Feature Flags
  features: {
    enableAdvancedFiltering: true,
    enableExport: true,
    enableBulkOperations: false,
    enableRealTimeUpdates: false,
  },
} as const;

// Type-safe access to configuration
export type AppConfig = typeof APP_CONFIG;
