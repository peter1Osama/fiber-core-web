
let mapper = {
  color: "colors",
  borderWidth: "borderWidth",
}

const input = {
  "color": {
    "content": {
      "content-primary": {
        "value": "#272e35",
        "type": "color"
      },
      "content-secondary": {
        "value": "#555f6d",
        "type": "color"
      },
      "content-tertiary": {
        "value": "#7e8c9a",
        "type": "color"
      },
      "content-disabled": {
        "value": "#9ea8b3",
        "type": "color"
      },
      "content-primary-inverse": {
        "value": "#ffffff",
        "type": "color"
      },
      "content-secondary-inverse": {
        "value": "#ffffffa3",
        "type": "color"
      },
      "content-tertiary-inverse": {
        "value": "#ffffff66",
        "type": "color"
      },
      "content-disabled-inverse": {
        "value": "#ffffff3d",
        "type": "color"
      },
      "content-info-primary": {
        "value": "#113997",
        "type": "color"
      },
      "content-info-secondary": {
        "value": "#3061d5",
        "type": "color"
      },
      "content-success-primary": {
        "value": "#135315",
        "type": "color"
      },
      "content-success-secondary": {
        "value": "#347434",
        "type": "color"
      },
      "content-warning-primary": {
        "value": "#7a4510",
        "type": "color"
      },
      "content-warning-secondary": {
        "value": "#f59638",
        "type": "color"
      },
      "content-danger-primary": {
        "value": "#6f2020",
        "type": "color"
      },
      "content-danger-secondary": {
        "value": "#c53434",
        "type": "color"
      },
      "content-brand-primary": {
        "value": "#113997",
        "type": "color"
      },
      "content-brand-secondary": {
        "value": "#3061d5",
        "type": "color"
      }
    },
    "border": {
      "border-default": {
        "value": "#eaedf0",
        "type": "color"
      },
      "border-defaultA": {
        "value": "#10284717",
        "type": "color"
      },
      "border-inverse": {
        "value": "#ffffff",
        "type": "color"
      },
      "border-neutral-strong": {
        "value": "#555f6d",
        "type": "color"
      },
      "border-neutral-subtle": {
        "value": "#cfd6dd",
        "type": "color"
      },
      "border-info-strong": {
        "value": "#3061d5",
        "type": "color"
      },
      "border-info-subtle": {
        "value": "#ccdcff",
        "type": "color"
      },
      "border-success-strong": {
        "value": "#347434",
        "type": "color"
      },
      "border-success-subtle": {
        "value": "#c6ecc6",
        "type": "color"
      },
      "border-warning-strong": {
        "value": "#f59638",
        "type": "color"
      },
      "border-warning-subtle": {
        "value": "#ffd4a8",
        "type": "color"
      },
      "border-danger-strong": {
        "value": "#c53434",
        "type": "color"
      },
      "border-danger-subtle": {
        "value": "#fccfcf",
        "type": "color"
      }
    },
    "background": {
      "background-default": {
        "value": "#ffffff",
        "type": "color"
      },
      "background-inverse": {
        "value": "#272e35",
        "type": "color"
      },
      "background-neutral-strong": {
        "value": "#555f6d",
        "type": "color"
      },
      "background-neutral-muted": {
        "value": "#dee3e7",
        "type": "color"
      },
      "background-neutral-onSubtle": {
        "value": "#eaedf0",
        "type": "color"
      },
      "background-neutral-subtle": {
        "value": "#f5f7f9",
        "type": "color"
      },
      "background-neutral-surface": {
        "value": "#fcfcfd",
        "type": "color"
      },
      "background-info-strong": {
        "value": "#3061d5",
        "type": "color"
      },
      "background-info-muted": {
        "value": "#d6e3ff",
        "type": "color"
      },
      "background-info-onSubtle": {
        "value": "#e5eeff",
        "type": "color"
      },
      "background-info-subtle": {
        "value": "#f5f8ff",
        "type": "color"
      },
      "background-info-surface": {
        "value": "#fafbff",
        "type": "color"
      },
      "background-success-strong": {
        "value": "#347434",
        "type": "color"
      },
      "background-success-muted": {
        "value": "#cff2cf",
        "type": "color"
      },
      "background-success-onSubtle": {
        "value": "#dff6df",
        "type": "color"
      },
      "background-success-subtle": {
        "value": "#f4fbf4",
        "type": "color"
      },
      "background-success-surface": {
        "value": "#fbfefb",
        "type": "color"
      },
      "background-warning-strong": {
        "value": "#f59638",
        "type": "color"
      },
      "background-warning-muted": {
        "value": "#fcdec0",
        "type": "color"
      },
      "background-warning-onSubtle": {
        "value": "#ffe8d1",
        "type": "color"
      },
      "background-warning-subtle": {
        "value": "#fff5eb",
        "type": "color"
      },
      "background-warning-surface": {
        "value": "#fffcfa",
        "type": "color"
      },
      "background-danger-strong": {
        "value": "#c53434",
        "type": "color"
      },
      "background-danger-muted": {
        "value": "#fcd9d9",
        "type": "color"
      },
      "background-danger-onSubtle": {
        "value": "#fee7e7",
        "type": "color"
      },
      "background-danger-subtle": {
        "value": "#fef5f5",
        "type": "color"
      },
      "background-danger-surface": {
        "value": "#fffafa",
        "type": "color"
      },
      "background-brand-strong": {
        "value": "#3061d5",
        "type": "color"
      },
      "background-brand-muted": {
        "value": "#d6e3ff",
        "type": "color"
      },
      "background-brand-onSubtle": {
        "value": "#e5eeff",
        "type": "color"
      },
      "background-brand-surface": {
        "value": "#fafbff",
        "type": "color"
      },
      "background-brand-subtle": {
        "value": "#f5f8ff",
        "type": "color"
      }
    },
    "action": {
      "primary": {
        "action-primary-normal": {
          "value": "#3061d5",
          "type": "color"
        },
        "action-primary-hover": {
          "value": "#1e4fc2",
          "type": "color"
        },
        "action-primary-active": {
          "value": "#113997",
          "type": "color"
        },
        "action-primary-selected": {
          "value": "#1e4fc2",
          "type": "color"
        },
        "action-primary-subtle-normal": {
          "value": "#ebf0ff",
          "type": "color"
        },
        "action-primary-subtle-hover": {
          "value": "#e5eeff",
          "type": "color"
        },
        "action-primary-subtle-active": {
          "value": "#ccdcff",
          "type": "color"
        },
        "action-primary-subtle-selected": {
          "value": "#e5eeff",
          "type": "color"
        }
      },
      "neutral": {
        "action-neutral-normal": {
          "value": "#4a545e",
          "type": "color"
        },
        "action-neutral-hover": {
          "value": "#3a424a",
          "type": "color"
        },
        "action-neutral-active": {
          "value": "#272e35",
          "type": "color"
        },
        "action-neutral-selected": {
          "value": "#3a424a",
          "type": "color"
        },
        "action-neutral-subtle-normal": {
          "value": "#f0f3f5",
          "type": "color"
        },
        "action-neutral-subtle-hover": {
          "value": "#eaedf0",
          "type": "color"
        },
        "action-neutral-subtle-active": {
          "value": "#cfd6dd",
          "type": "color"
        },
        "action-neutral-subtle-selected": {
          "value": "#eaedf0",
          "type": "color"
        }
      },
      "success": {
        "action-success-normal": {
          "value": "#347434",
          "type": "color"
        },
        "action-success-hover": {
          "value": "#246626",
          "type": "color"
        },
        "action-success-active": {
          "value": "#135315",
          "type": "color"
        },
        "action-success-selected": {
          "value": "#246626",
          "type": "color"
        },
        "action-success-subtle-normal": {
          "value": "#e6f9e6",
          "type": "color"
        },
        "action-success-subtle-hover": {
          "value": "#dff6df",
          "type": "color"
        },
        "action-success-subtle-active": {
          "value": "#c6ecc6",
          "type": "color"
        },
        "action-success-subtle-selected": {
          "value": "#dff6df",
          "type": "color"
        }
      },
      "danger": {
        "action-danger-normal": {
          "value": "#c53434",
          "type": "color"
        },
        "action-danger-hover": {
          "value": "#952d2d",
          "type": "color"
        },
        "action-danger-active": {
          "value": "#6f2020",
          "type": "color"
        },
        "action-danger-selected": {
          "value": "#952d2d",
          "type": "color"
        },
        "action-danger-subtle-normal": {
          "value": "#ffebeb",
          "type": "color"
        },
        "action-danger-subtle-hover": {
          "value": "#fee7e7",
          "type": "color"
        },
        "action-danger-subtle-active": {
          "value": "#fccfcf",
          "type": "color"
        },
        "action-danger-subtle-selected": {
          "value": "#fee7e7",
          "type": "color"
        }
      },
      "ghost": {
        "action-ghost-normal": {
          "value": "#ffffff00",
          "type": "color"
        },
        "action-ghost-hover": {
          "value": "#022e500f",
          "type": "color"
        },
        "action-ghost-active": {
          "value": "#10284717",
          "type": "color"
        },
        "action-ghost-selected": {
          "value": "#022e500f",
          "type": "color"
        },
        "action-ghost-inverse-hover": {
          "value": "#ffffff1a",
          "type": "color"
        },
        "action-ghost-inverse-active": {
          "value": "#ffffff1f",
          "type": "color"
        },
        "action-ghost-inverse-selected": {
          "value": "#ffffff1a",
          "type": "color"
        },
        "action-ghost-danger-hover": {
          "value": "#ffebeb",
          "type": "color"
        },
        "action-ghost-danger-active": {
          "value": "#fee7e7",
          "type": "color"
        },
        "action-ghost-danger-selected": {
          "value": "#ffebeb",
          "type": "color"
        }
      },
      "outline": {
        "action-outline-normal": {
          "value": "#cfd6dd",
          "type": "color"
        },
        "action-outline-hover": {
          "value": "#9ea8b3",
          "type": "color"
        },
        "action-outline-active": {
          "value": "#7e8c9a",
          "type": "color"
        },
        "action-outline-selected": {
          "value": "#9ea8b3",
          "type": "color"
        }
      },
      "inverse": {
        "action-inverse-normal": {
          "value": "#ffffff",
          "type": "color"
        },
        "action-inverse-hover": {
          "value": "#ffffffd1",
          "type": "color"
        },
        "action-inverse-active": {
          "value": "#ffffffb8",
          "type": "color"
        },
        "action-inverse-selected": {
          "value": "#ffffffd1",
          "type": "color"
        }
      },
      "reverseInverse": {
        "action-reverseInverse-normal": {
          "value": "#0a121ae0",
          "type": "color"
        },
        "action-reverseInverse-hover": {
          "value": "#1d2835cc",
          "type": "color"
        },
        "action-reverseInverse-active": {
          "value": "#182639bd",
          "type": "color"
        },
        "action-reverseInverse-selected": {
          "value": "#1d2835cc",
          "type": "color"
        }
      }
    },
    "interaction": {
      "default": {
        "interaction-default-normal": {
          "value": "#3061d5",
          "type": "color"
        },
        "interaction-default-hover": {
          "value": "#1e4fc2",
          "type": "color"
        },
        "interaction-default-active": {
          "value": "#113997",
          "type": "color"
        },
        "interaction-default-selected": {
          "value": "#1e4fc2",
          "type": "color"
        },
        "interaction-default-subtle-normal": {
          "value": "#ebf0ff",
          "type": "color"
        },
        "interaction-default-subtle-hover": {
          "value": "#e5eeff",
          "type": "color"
        },
        "interaction-default-subtle-active": {
          "value": "#ccdcff",
          "type": "color"
        },
        "interaction-default-subtle-selected": {
          "value": "#e5eeff",
          "type": "color"
        }
      },
      "neutral": {
        "interaction-neutral-normal": {
          "value": "#4a545e",
          "type": "color"
        },
        "interaction-neutral-hover": {
          "value": "#3a424a",
          "type": "color"
        },
        "interaction-neutral-active": {
          "value": "#272e35",
          "type": "color"
        },
        "interaction-neutral-selected": {
          "value": "#3a424a",
          "type": "color"
        },
        "interaction-neutral-subtle-normal": {
          "value": "#f0f3f5",
          "type": "color"
        },
        "interaction-neutral-subtle-hover": {
          "value": "#eaedf0",
          "type": "color"
        },
        "interaction-neutral-subtle-active": {
          "value": "#cfd6dd",
          "type": "color"
        },
        "interaction-neutral-subtle-selected": {
          "value": "#eaedf0",
          "type": "color"
        }
      },
      "danger": {
        "interaction-danger-normal": {
          "value": "#c53434",
          "type": "color"
        },
        "interaction-danger-hover": {
          "value": "#952d2d",
          "type": "color"
        },
        "interaction-danger-active": {
          "value": "#6f2020",
          "type": "color"
        },
        "interaction-danger-selected": {
          "value": "#952d2d",
          "type": "color"
        },
        "interaction-danger-subtle-normal": {
          "value": "#ffebeb",
          "type": "color"
        },
        "interaction-danger-subtle-hover": {
          "value": "#fee7e7",
          "type": "color"
        },
        "interaction-danger-subtle-active": {
          "value": "#fccfcf",
          "type": "color"
        },
        "interaction-danger-subtle-selected": {
          "value": "#fee7e7",
          "type": "color"
        }
      },
      "ghost": {
        "interaction-ghost-normal": {
          "value": "#ffffff00",
          "type": "color"
        },
        "interaction-ghost-hover": {
          "value": "#022e500f",
          "type": "color"
        },
        "interaction-ghost-active": {
          "value": "#10284717",
          "type": "color"
        },
        "interaction-ghost-selected": {
          "value": "#022e500f",
          "type": "color"
        },
        "interaction-ghost-inverse-hover": {
          "value": "#ffffff1a",
          "type": "color"
        },
        "interaction-ghost-inverse-normal": {
          "value": "#ffffff1f",
          "type": "color"
        },
        "interaction-ghost-inverse-selected": {
          "value": "#ffffff1a",
          "type": "color"
        },
        "interaction-ghost-danger-hover": {
          "value": "#ffebeb",
          "type": "color"
        },
        "interaction-ghost-danger-normal": {
          "value": "#fee7e7",
          "type": "color"
        },
        "interaction-ghost-danger-selected": {
          "value": "#ffebeb",
          "type": "color"
        }
      },
      "disabled": {
        "interaction-disabled-normal": {
          "value": "#9ea8b3",
          "type": "color"
        },
        "interaction-disabled-hover": {
          "value": "#7e8c9a",
          "type": "color"
        },
        "interaction-disabled-active": {
          "value": "#555f6d",
          "type": "color"
        },
        "interaction-disabled-subtle-normal": {
          "value": "#eaedf0",
          "type": "color"
        },
        "interaction-disabled-subtle-hover": {
          "value": "#dee3e7",
          "type": "color"
        },
        "interaction-disabled-subtle-active": {
          "value": "#cfd6dd",
          "type": "color"
        }
      },
      "border": {
        "interaction-border-normal": {
          "value": "#8eb0fb",
          "type": "color"
        },
        "interaction-border-hover": {
          "value": "#6691f4",
          "type": "color"
        },
        "interaction-border-active": {
          "value": "#2759ce",
          "type": "color"
        },
        "interaction-border-selected": {
          "value": "#3061d5",
          "type": "color"
        },
        "interaction-border-neutral-normal": {
          "value": "#cfd6dd",
          "type": "color"
        },
        "interaction-border-neutral-hover": {
          "value": "#9ea8b3",
          "type": "color"
        },
        "interaction-border-neutral-active": {
          "value": "#7e8c9a",
          "type": "color"
        },
        "interaction-border-neutral-selected": {
          "value": "#9ea8b3",
          "type": "color"
        },
        "interaction-border-danger": {
          "value": "#f26363",
          "type": "color"
        }
      },
      "background": {
        "interaction-background-modal": {
          "value": "#ffffff",
          "type": "color"
        },
        "interaction-background-modeless": {
          "value": "#ffffff",
          "type": "color"
        },
        "interaction-background-modeless-inverse": {
          "value": "#272e35",
          "type": "color"
        },
        "interaction-background-sidepanel": {
          "value": "#ffffff",
          "type": "color"
        },
        "interaction-background-formField": {
          "value": "#ffffff",
          "type": "color"
        },
        "interaction-background-dimmer": {
          "value": "#182639bd",
          "type": "color"
        }
      },
      "inverse": {
        "interaction-inverse-normal": {
          "value": "#ffffff",
          "type": "color"
        },
        "interaction-inverse-hover": {
          "value": "#ffffffd1",
          "type": "color"
        },
        "interaction-inverse-active": {
          "value": "#ffffffb8",
          "type": "color"
        },
        "interaction-inverse-selected": {
          "value": "#ffffffd1",
          "type": "color"
        }
      },
      "focus": {
        "interaction-focus-default": {
          "value": "#6691f4",
          "type": "color"
        }
      }
    },
    "nonSemantic": {
      "gray": {
        "nonSemantic-gray-content-primary": {
          "value": "#272e35",
          "type": "color"
        },
        "nonSemantic-gray-content-secondary": {
          "value": "#555f6d",
          "type": "color"
        },
        "nonSemantic-gray-border-default": {
          "value": "#eaedf0",
          "type": "color"
        },
        "nonSemantic-gray-border-strong": {
          "value": "#555f6d",
          "type": "color"
        },
        "nonSemantic-gray-border-subtle": {
          "value": "#cfd6dd",
          "type": "color"
        },
        "nonSemantic-gray-background-strong": {
          "value": "#555f6d",
          "type": "color"
        },
        "nonSemantic-gray-background-muted": {
          "value": "#dee3e7",
          "type": "color"
        },
        "nonSemantic-gray-background-onSubtle": {
          "value": "#eaedf0",
          "type": "color"
        },
        "nonSemantic-gray-background-subtle": {
          "value": "#f5f7f9",
          "type": "color"
        },
        "nonSemantic-gray-background-surface": {
          "value": "#fcfcfd",
          "type": "color"
        }
      },
      "white": {
        "nonSemantic-white-content-primary": {
          "value": "#ffffff",
          "type": "color"
        },
        "nonSemantic-white-content-secondary": {
          "value": "#ffffffa3",
          "type": "color"
        },
        "nonSemantic-white-border-default": {
          "value": "#ffffff66",
          "type": "color"
        },
        "nonSemantic-white-border-strong": {
          "value": "#ffffff",
          "type": "color"
        },
        "nonSemantic-white-border-subtle": {
          "value": "#ffffffad",
          "type": "color"
        },
        "nonSemantic-white-background-strong": {
          "value": "#ffffff",
          "type": "color"
        },
        "nonSemantic-white-background-muted": {
          "value": "#ffffffa3",
          "type": "color"
        },
        "nonSemantic-white-background-onSubtle": {
          "value": "#ffffff66",
          "type": "color"
        },
        "nonSemantic-white-background-subtle": {
          "value": "#ffffff1f",
          "type": "color"
        },
        "nonSemantic-white-background-surface": {
          "value": "#ffffff1a",
          "type": "color"
        }
      },
      "red": {
        "nonSemantic-red-content-primary": {
          "value": "#6f2020",
          "type": "color"
        },
        "nonSemantic-red-content-secondary": {
          "value": "#c53434",
          "type": "color"
        },
        "nonSemantic-red-border-default": {
          "value": "#fee7e7",
          "type": "color"
        },
        "nonSemantic-red-border-strong": {
          "value": "#c53434",
          "type": "color"
        },
        "nonSemantic-red-border-subtle": {
          "value": "#fccfcf",
          "type": "color"
        },
        "nonSemantic-red-background-strong": {
          "value": "#c53434",
          "type": "color"
        },
        "nonSemantic-red-background-muted": {
          "value": "#fcd9d9",
          "type": "color"
        },
        "nonSemantic-red-background-onSubtle": {
          "value": "#fee7e7",
          "type": "color"
        },
        "nonSemantic-red-background-subtle": {
          "value": "#fef5f5",
          "type": "color"
        },
        "nonSemantic-red-background-surface": {
          "value": "#fffafa",
          "type": "color"
        }
      },
      "magenta": {
        "nonSemantic-magenta-content-primary": {
          "value": "#671e4d",
          "type": "color"
        },
        "nonSemantic-magenta-content-secondary": {
          "value": "#b12f86",
          "type": "color"
        },
        "nonSemantic-magenta-border-default": {
          "value": "#fde2f4",
          "type": "color"
        },
        "nonSemantic-magenta-border-strong": {
          "value": "#b12f86",
          "type": "color"
        },
        "nonSemantic-magenta-border-subtle": {
          "value": "#f7cae8",
          "type": "color"
        },
        "nonSemantic-magenta-background-strong": {
          "value": "#b12f86",
          "type": "color"
        },
        "nonSemantic-magenta-background-muted": {
          "value": "#fbd5ee",
          "type": "color"
        },
        "nonSemantic-magenta-background-onSubtle": {
          "value": "#fde2f4",
          "type": "color"
        },
        "nonSemantic-magenta-background-subtle": {
          "value": "#fef6fb",
          "type": "color"
        },
        "nonSemantic-magenta-background-surface": {
          "value": "#fffafd",
          "type": "color"
        }
      },
      "purple": {
        "nonSemantic-purple-content-primary": {
          "value": "#5b1e67",
          "type": "color"
        },
        "nonSemantic-purple-content-secondary": {
          "value": "#9939ac",
          "type": "color"
        },
        "nonSemantic-purple-border-default": {
          "value": "#f8e2fd",
          "type": "color"
        },
        "nonSemantic-purple-border-strong": {
          "value": "#9939ac",
          "type": "color"
        },
        "nonSemantic-purple-border-subtle": {
          "value": "#f4caf7",
          "type": "color"
        },
        "nonSemantic-purple-background-strong": {
          "value": "#9939ac",
          "type": "color"
        },
        "nonSemantic-purple-background-muted": {
          "value": "#f5d5fb",
          "type": "color"
        },
        "nonSemantic-purple-background-onSubtle": {
          "value": "#f8e2fd",
          "type": "color"
        },
        "nonSemantic-purple-background-subtle": {
          "value": "#fdf5ff",
          "type": "color"
        },
        "nonSemantic-purple-background-surface": {
          "value": "#fefaff",
          "type": "color"
        }
      },
      "violet": {
        "nonSemantic-violet-content-primary": {
          "value": "#39288a",
          "type": "color"
        },
        "nonSemantic-violet-content-secondary": {
          "value": "#634eca",
          "type": "color"
        },
        "nonSemantic-violet-border-default": {
          "value": "#eeebff",
          "type": "color"
        },
        "nonSemantic-violet-border-strong": {
          "value": "#634eca",
          "type": "color"
        },
        "nonSemantic-violet-border-subtle": {
          "value": "#dcd6ff",
          "type": "color"
        },
        "nonSemantic-violet-background-strong": {
          "value": "#634eca",
          "type": "color"
        },
        "nonSemantic-violet-background-muted": {
          "value": "#e3e0ff",
          "type": "color"
        },
        "nonSemantic-violet-background-onSubtle": {
          "value": "#eeebff",
          "type": "color"
        },
        "nonSemantic-violet-background-subtle": {
          "value": "#f7f5ff",
          "type": "color"
        },
        "nonSemantic-violet-background-surface": {
          "value": "#fbfaff",
          "type": "color"
        }
      },
      "blue": {
        "nonSemantic-blue-content-primary": {
          "value": "#113997",
          "type": "color"
        },
        "nonSemantic-blue-content-secondary": {
          "value": "#3061d5",
          "type": "color"
        },
        "nonSemantic-blue-border-default": {
          "value": "#e5eeff",
          "type": "color"
        },
        "nonSemantic-blue-border-strong": {
          "value": "#3061d5",
          "type": "color"
        },
        "nonSemantic-blue-border-subtle": {
          "value": "#ccdcff",
          "type": "color"
        },
        "nonSemantic-blue-background-strong": {
          "value": "#3061d5",
          "type": "color"
        },
        "nonSemantic-blue-background-muted": {
          "value": "#d6e3ff",
          "type": "color"
        },
        "nonSemantic-blue-background-onSubtle": {
          "value": "#e5eeff",
          "type": "color"
        },
        "nonSemantic-blue-background-subtle": {
          "value": "#f5f8ff",
          "type": "color"
        },
        "nonSemantic-blue-background-surface": {
          "value": "#fafbff",
          "type": "color"
        }
      },
      "cyan": {
        "nonSemantic-cyan-content-primary": {
          "value": "#0c456e",
          "type": "color"
        },
        "nonSemantic-cyan-content-secondary": {
          "value": "#0870ba",
          "type": "color"
        },
        "nonSemantic-cyan-border-default": {
          "value": "#e0f1ff",
          "type": "color"
        },
        "nonSemantic-cyan-border-strong": {
          "value": "#0870ba",
          "type": "color"
        },
        "nonSemantic-cyan-border-subtle": {
          "value": "#c2e2ff",
          "type": "color"
        },
        "nonSemantic-cyan-background-strong": {
          "value": "#0870ba",
          "type": "color"
        },
        "nonSemantic-cyan-background-muted": {
          "value": "#cce7ff",
          "type": "color"
        },
        "nonSemantic-cyan-background-onSubtle": {
          "value": "#e0f1ff",
          "type": "color"
        },
        "nonSemantic-cyan-background-subtle": {
          "value": "#f0f9ff",
          "type": "color"
        },
        "nonSemantic-cyan-background-surface": {
          "value": "#fafdff",
          "type": "color"
        }
      },
      "teal": {
        "nonSemantic-teal-content-primary": {
          "value": "#0a495c",
          "type": "color"
        },
        "nonSemantic-teal-content-secondary": {
          "value": "#077597",
          "type": "color"
        },
        "nonSemantic-teal-border-default": {
          "value": "#e0f3fa",
          "type": "color"
        },
        "nonSemantic-teal-border-strong": {
          "value": "#077597",
          "type": "color"
        },
        "nonSemantic-teal-border-subtle": {
          "value": "#b8e8f5",
          "type": "color"
        },
        "nonSemantic-teal-background-strong": {
          "value": "#077597",
          "type": "color"
        },
        "nonSemantic-teal-background-muted": {
          "value": "#c5ecf7",
          "type": "color"
        },
        "nonSemantic-teal-background-onSubtle": {
          "value": "#e0f3fa",
          "type": "color"
        },
        "nonSemantic-teal-background-subtle": {
          "value": "#f0fbff",
          "type": "color"
        },
        "nonSemantic-teal-background-surface": {
          "value": "#fafeff",
          "type": "color"
        }
      },
      "aquamarine": {
        "nonSemantic-aquamarine-content-primary": {
          "value": "#0d4a42",
          "type": "color"
        },
        "nonSemantic-aquamarine-content-secondary": {
          "value": "#097b68",
          "type": "color"
        },
        "nonSemantic-aquamarine-border-default": {
          "value": "#daf6f3",
          "type": "color"
        },
        "nonSemantic-aquamarine-border-strong": {
          "value": "#097b68",
          "type": "color"
        },
        "nonSemantic-aquamarine-border-subtle": {
          "value": "#bee9e4",
          "type": "color"
        },
        "nonSemantic-aquamarine-background-strong": {
          "value": "#097b68",
          "type": "color"
        },
        "nonSemantic-aquamarine-background-muted": {
          "value": "#c5f2ec",
          "type": "color"
        },
        "nonSemantic-aquamarine-background-onSubtle": {
          "value": "#daf6f3",
          "type": "color"
        },
        "nonSemantic-aquamarine-background-subtle": {
          "value": "#f0faf9",
          "type": "color"
        },
        "nonSemantic-aquamarine-background-surface": {
          "value": "#fbfefe",
          "type": "color"
        }
      },
      "green": {
        "nonSemantic-green-content-primary": {
          "value": "#135315",
          "type": "color"
        },
        "nonSemantic-green-content-secondary": {
          "value": "#347434",
          "type": "color"
        },
        "nonSemantic-green-border-default": {
          "value": "#dff6df",
          "type": "color"
        },
        "nonSemantic-green-border-strong": {
          "value": "#347434",
          "type": "color"
        },
        "nonSemantic-green-border-subtle": {
          "value": "#c6ecc6",
          "type": "color"
        },
        "nonSemantic-green-background-strong": {
          "value": "#347434",
          "type": "color"
        },
        "nonSemantic-green-background-muted": {
          "value": "#cff2cf",
          "type": "color"
        },
        "nonSemantic-green-background-onSubtle": {
          "value": "#dff6df",
          "type": "color"
        },
        "nonSemantic-green-background-subtle": {
          "value": "#f4fbf4",
          "type": "color"
        },
        "nonSemantic-green-background-surface": {
          "value": "#fbfefb",
          "type": "color"
        }
      },
      "orange": {
        "nonSemantic-orange-content-primary": {
          "value": "#7a4510",
          "type": "color"
        },
        "nonSemantic-orange-content-secondary": {
          "value": "#f59638",
          "type": "color"
        },
        "nonSemantic-orange-border-default": {
          "value": "#ffe8d1",
          "type": "color"
        },
        "nonSemantic-orange-border-strong": {
          "value": "#f59638",
          "type": "color"
        },
        "nonSemantic-orange-border-subtle": {
          "value": "#ffd4a8",
          "type": "color"
        },
        "nonSemantic-orange-background-strong": {
          "value": "#f59638",
          "type": "color"
        },
        "nonSemantic-orange-background-muted": {
          "value": "#fcdec0",
          "type": "color"
        },
        "nonSemantic-orange-background-onSubtle": {
          "value": "#ffe8d1",
          "type": "color"
        },
        "nonSemantic-orange-background-subtle": {
          "value": "#fff5eb",
          "type": "color"
        },
        "nonSemantic-orange-background-surface": {
          "value": "#fffcfa",
          "type": "color"
        }
      }
    },
    "semantic": {
      "brand": {
        "semantic-brand--4": {
          "value": "#041f5d",
          "type": "color"
        },
        "semantic-brand--3": {
          "value": "#113997",
          "type": "color"
        },
        "semantic-brand--2": {
          "value": "#1e4fc2",
          "type": "color"
        },
        "semantic-brand--1": {
          "value": "#2759ce",
          "type": "color"
        },
        "semantic-brand-0": {
          "value": "#3061d5",
          "type": "color"
        },
        "semantic-brand-+1": {
          "value": "#6691f4",
          "type": "color"
        },
        "semantic-brand-+2": {
          "value": "#8eb0fb",
          "type": "color"
        },
        "semantic-brand-+3": {
          "value": "#ccdcff",
          "type": "color"
        },
        "semantic-brand-+4": {
          "value": "#d6e3ff",
          "type": "color"
        },
        "semantic-brand-+5": {
          "value": "#e5eeff",
          "type": "color"
        },
        "semantic-brand-+6": {
          "value": "#ebf0ff",
          "type": "color"
        },
        "semantic-brand-+7": {
          "value": "#f5f8ff",
          "type": "color"
        },
        "semantic-brand-+8": {
          "value": "#fafbff",
          "type": "color"
        }
      },
      "neutral": {
        "semantic-neutral--4": {
          "value": "#1b242c",
          "type": "color"
        },
        "semantic-neutral--3": {
          "value": "#272e35",
          "type": "color"
        },
        "semantic-neutral--2": {
          "value": "#3a424a",
          "type": "color"
        },
        "semantic-neutral--1": {
          "value": "#4a545e",
          "type": "color"
        },
        "semantic-neutral-0": {
          "value": "#555f6d",
          "type": "color"
        },
        "semantic-neutral-+1": {
          "value": "#7e8c9a",
          "type": "color"
        },
        "semantic-neutral-+2": {
          "value": "#9ea8b3",
          "type": "color"
        },
        "semantic-neutral-+3": {
          "value": "#cfd6dd",
          "type": "color"
        },
        "semantic-neutral-+4": {
          "value": "#dee3e7",
          "type": "color"
        },
        "semantic-neutral-+5": {
          "value": "#eaedf0",
          "type": "color"
        },
        "semantic-neutral-+6": {
          "value": "#f0f3f5",
          "type": "color"
        },
        "semantic-neutral-+7": {
          "value": "#f5f7f9",
          "type": "color"
        },
        "semantic-neutral-+8": {
          "value": "#fcfcfd",
          "type": "color"
        }
      },
      "neutralAlpha": {
        "semantic-neutralA--4": {
          "value": "#09131aed",
          "type": "color"
        },
        "semantic-neutralA--3": {
          "value": "#0a121ae0",
          "type": "color"
        },
        "semantic-neutralA--2": {
          "value": "#1a232ddb",
          "type": "color"
        },
        "semantic-neutralA--1": {
          "value": "#1d2835cc",
          "type": "color"
        },
        "semantic-neutralA-0": {
          "value": "#182639bd",
          "type": "color"
        },
        "semantic-neutralA-+1": {
          "value": "#1830498f",
          "type": "color"
        },
        "semantic-neutralA-+2": {
          "value": "#0d253f66",
          "type": "color"
        },
        "semantic-neutralA-+3": {
          "value": "#10315633",
          "type": "color"
        },
        "semantic-neutralA-+4": {
          "value": "#04294321",
          "type": "color"
        },
        "semantic-neutralA-+5": {
          "value": "#10284717",
          "type": "color"
        },
        "semantic-neutralA-+6": {
          "value": "#022e500f",
          "type": "color"
        },
        "semantic-neutralA-+7": {
          "value": "#00295c0a",
          "type": "color"
        },
        "semantic-neutralA-+8": {
          "value": "#1f529e05",
          "type": "color"
        }
      },
      "info": {
        "semantic-info--4": {
          "value": "#041f5d",
          "type": "color"
        },
        "semantic-info--3": {
          "value": "#113997",
          "type": "color"
        },
        "semantic-info--2": {
          "value": "#1e4fc2",
          "type": "color"
        },
        "semantic-info--1": {
          "value": "#2759ce",
          "type": "color"
        },
        "semantic-info-0": {
          "value": "#3061d5",
          "type": "color"
        },
        "semantic-info-+1": {
          "value": "#6691f4",
          "type": "color"
        },
        "semantic-info-+2": {
          "value": "#8eb0fb",
          "type": "color"
        },
        "semantic-info-+3": {
          "value": "#ccdcff",
          "type": "color"
        },
        "semantic-info-+4": {
          "value": "#d6e3ff",
          "type": "color"
        },
        "semantic-info-+5": {
          "value": "#e5eeff",
          "type": "color"
        },
        "semantic-info-+6": {
          "value": "#ebf0ff",
          "type": "color"
        },
        "semantic-info-+7": {
          "value": "#f5f8ff",
          "type": "color"
        },
        "semantic-info-+8": {
          "value": "#fafbff",
          "type": "color"
        }
      },
      "success": {
        "semantic-success--4": {
          "value": "#0a2e0b",
          "type": "color"
        },
        "semantic-success--3": {
          "value": "#135315",
          "type": "color"
        },
        "semantic-success--2": {
          "value": "#246626",
          "type": "color"
        },
        "semantic-success--1": {
          "value": "#2f6f2f",
          "type": "color"
        },
        "semantic-success-0": {
          "value": "#347434",
          "type": "color"
        },
        "semantic-success-+1": {
          "value": "#55a555",
          "type": "color"
        },
        "semantic-success-+2": {
          "value": "#87c987",
          "type": "color"
        },
        "semantic-success-+3": {
          "value": "#c6ecc6",
          "type": "color"
        },
        "semantic-success-+4": {
          "value": "#cff2cf",
          "type": "color"
        },
        "semantic-success-+5": {
          "value": "#dff6df",
          "type": "color"
        },
        "semantic-success-+6": {
          "value": "#e6f9e6",
          "type": "color"
        },
        "semantic-success-+7": {
          "value": "#f4fbf4",
          "type": "color"
        },
        "semantic-success-+8": {
          "value": "#fbfefb",
          "type": "color"
        }
      },
      "warning": {
        "semantic-warning--4": {
          "value": "#492909",
          "type": "color"
        },
        "semantic-warning--3": {
          "value": "#7a4510",
          "type": "color"
        },
        "semantic-warning--2": {
          "value": "#a05c1c",
          "type": "color"
        },
        "semantic-warning--1": {
          "value": "#b4610e",
          "type": "color"
        },
        "semantic-warning-0": {
          "value": "#f59638",
          "type": "color"
        },
        "semantic-warning-+1": {
          "value": "#f6a351",
          "type": "color"
        },
        "semantic-warning-+2": {
          "value": "#feb871",
          "type": "color"
        },
        "semantic-warning-+3": {
          "value": "#ffd4a8",
          "type": "color"
        },
        "semantic-warning-+4": {
          "value": "#fcdec0",
          "type": "color"
        },
        "semantic-warning-+5": {
          "value": "#ffe8d1",
          "type": "color"
        },
        "semantic-warning-+6": {
          "value": "#fff0e0",
          "type": "color"
        },
        "semantic-warning-+7": {
          "value": "#fff5eb",
          "type": "color"
        },
        "semantic-warning-+8": {
          "value": "#fffcfa",
          "type": "color"
        }
      },
      "danger": {
        "semantic-danger--4": {
          "value": "#4a0d0d",
          "type": "color"
        },
        "semantic-danger--3": {
          "value": "#6f2020",
          "type": "color"
        },
        "semantic-danger--2": {
          "value": "#952d2d",
          "type": "color"
        },
        "semantic-danger--1": {
          "value": "#a13636",
          "type": "color"
        },
        "semantic-danger-0": {
          "value": "#c53434",
          "type": "color"
        },
        "semantic-danger-+1": {
          "value": "#f26363",
          "type": "color"
        },
        "semantic-danger-+2": {
          "value": "#f49090",
          "type": "color"
        },
        "semantic-danger-+3": {
          "value": "#fccfcf",
          "type": "color"
        },
        "semantic-danger-+4": {
          "value": "#fcd9d9",
          "type": "color"
        },
        "semantic-danger-+5": {
          "value": "#fee7e7",
          "type": "color"
        },
        "semantic-danger-+6": {
          "value": "#ffebeb",
          "type": "color"
        },
        "semantic-danger-+7": {
          "value": "#fef5f5",
          "type": "color"
        },
        "semantic-danger-+8": {
          "value": "#fffafa",
          "type": "color"
        }
      }
    },
    "coolGray": {
      "cool-gray--4": {
        "value": "#1b242c",
        "type": "color"
      },
      "cool-gray--3": {
        "value": "#272e35",
        "type": "color"
      },
      "cool-gray--2": {
        "value": "#3a424a",
        "type": "color"
      },
      "cool-gray--1": {
        "value": "#4a545e",
        "type": "color"
      },
      "cool-gray-0": {
        "value": "#555f6d",
        "type": "color"
      },
      "cool-gray-+1": {
        "value": "#7e8c9a",
        "type": "color"
      },
      "cool-gray-+2": {
        "value": "#9ea8b3",
        "type": "color"
      },
      "cool-gray-+3": {
        "value": "#cfd6dd",
        "type": "color"
      },
      "cool-gray-+4": {
        "value": "#dee3e7",
        "type": "color"
      },
      "cool-gray-+5": {
        "value": "#eaedf0",
        "type": "color"
      },
      "cool-gray-+6": {
        "value": "#f0f3f5",
        "type": "color"
      },
      "cool-gray-+7": {
        "value": "#f5f7f9",
        "type": "color"
      },
      "cool-gray-+8": {
        "value": "#fcfcfd",
        "type": "color"
      }
    },
    "coolGrayAlpha": {
      "cool-grayA--4": {
        "value": "#09131aed",
        "type": "color"
      },
      "cool-grayA--3": {
        "value": "#0a121ae0",
        "type": "color"
      },
      "cool-grayA--2": {
        "value": "#1a232ddb",
        "type": "color"
      },
      "cool-grayA--1": {
        "value": "#1d2835cc",
        "type": "color"
      },
      "cool-grayA-0": {
        "value": "#182639bd",
        "type": "color"
      },
      "cool-grayA-+1": {
        "value": "#1830498f",
        "type": "color"
      },
      "cool-grayA-+2": {
        "value": "#0d253f66",
        "type": "color"
      },
      "cool-grayA-+3": {
        "value": "#10315633",
        "type": "color"
      },
      "cool-grayA-+4": {
        "value": "#04294321",
        "type": "color"
      },
      "cool-grayA-+5": {
        "value": "#10284717",
        "type": "color"
      },
      "cool-grayA-+6": {
        "value": "#022e500f",
        "type": "color"
      },
      "cool-grayA-+7": {
        "value": "#00295c0a",
        "type": "color"
      },
      "cool-grayA-+8": {
        "value": "#1f529e05",
        "type": "color"
      }
    },
    "neutralGray": {
      "neutral-gray--4": {
        "value": "#212121",
        "type": "color"
      },
      "neutral-gray--3": {
        "value": "#2e2e2e",
        "type": "color"
      },
      "neutral-gray--2": {
        "value": "#404040",
        "type": "color"
      },
      "neutral-gray--1": {
        "value": "#525252",
        "type": "color"
      },
      "neutral-gray-0": {
        "value": "#5e5e5e",
        "type": "color"
      },
      "neutral-gray-+1": {
        "value": "#8a8a8a",
        "type": "color"
      },
      "neutral-gray-+2": {
        "value": "#a6a6a6",
        "type": "color"
      },
      "neutral-gray-+3": {
        "value": "#d6d6d6",
        "type": "color"
      },
      "neutral-gray-+4": {
        "value": "#e3e3e3",
        "type": "color"
      },
      "neutral-gray-+5": {
        "value": "#ebebeb",
        "type": "color"
      },
      "neutral-gray-+6": {
        "value": "#f2f2f2",
        "type": "color"
      },
      "neutral-gray-+7": {
        "value": "#f7f7f7",
        "type": "color"
      },
      "neutral-gray-+8": {
        "value": "#fcfcfc",
        "type": "color"
      }
    },
    "neutralGrayAlpha": {
      "neutral-grayA--4": {
        "value": "#121212ed",
        "type": "color"
      },
      "neutral-grayA--3": {
        "value": "#0f0f0fe0",
        "type": "color"
      },
      "neutral-grayA--2": {
        "value": "#212121db",
        "type": "color"
      },
      "neutral-grayA--1": {
        "value": "#262626cc",
        "type": "color"
      },
      "neutral-grayA-0": {
        "value": "#262627bd",
        "type": "color"
      },
      "neutral-grayA-+1": {
        "value": "#2b2b2b8f",
        "type": "color"
      },
      "neutral-grayA-+2": {
        "value": "#21212166",
        "type": "color"
      },
      "neutral-grayA-+3": {
        "value": "#2e2e2e33",
        "type": "color"
      },
      "neutral-grayA-+4": {
        "value": "#1f1f1f21",
        "type": "color"
      },
      "neutral-grayA-+5": {
        "value": "#1c1c1c17",
        "type": "color"
      },
      "neutral-grayA-+6": {
        "value": "#2121210f",
        "type": "color"
      },
      "neutral-grayA-+7": {
        "value": "#2e2e2e0a",
        "type": "color"
      },
      "neutral-grayA-+8": {
        "value": "#52525205",
        "type": "color"
      }
    },
    "warmGray": {
      "warm-gray--4": {
        "value": "#222220",
        "type": "color"
      },
      "warm-gray--3": {
        "value": "#30302c",
        "type": "color"
      },
      "warm-gray--2": {
        "value": "#40403a",
        "type": "color"
      },
      "warm-gray--1": {
        "value": "#52524c",
        "type": "color"
      },
      "warm-gray-0": {
        "value": "#5f5f58",
        "type": "color"
      },
      "warm-gray-+1": {
        "value": "#8b8b84",
        "type": "color"
      },
      "warm-gray-+2": {
        "value": "#a8a89f",
        "type": "color"
      },
      "warm-gray-+3": {
        "value": "#d9d9d3",
        "type": "color"
      },
      "warm-gray-+4": {
        "value": "#e5e5e1",
        "type": "color"
      },
      "warm-gray-+5": {
        "value": "#eaeae6",
        "type": "color"
      },
      "warm-gray-+6": {
        "value": "#f3f3f1",
        "type": "color"
      },
      "warm-gray-+7": {
        "value": "#f8f8f7",
        "type": "color"
      },
      "warm-gray-+8": {
        "value": "#fdfdfc",
        "type": "color"
      }
    },
    "warmGrayAlpha": {
      "warm-grayA--4": {
        "value": "#131311ed",
        "type": "color"
      },
      "warm-grayA--3": {
        "value": "#12120de0",
        "type": "color"
      },
      "warm-grayA--2": {
        "value": "#22221bdb",
        "type": "color"
      },
      "warm-grayA--1": {
        "value": "#272720cc",
        "type": "color"
      },
      "warm-grayA-0": {
        "value": "#26261cbd",
        "type": "color"
      },
      "warm-grayA-+1": {
        "value": "#2f2f238f",
        "type": "color"
      },
      "warm-grayA-+2": {
        "value": "#28281166",
        "type": "color"
      },
      "warm-grayA-+3": {
        "value": "#3e3e1d33",
        "type": "color"
      },
      "warm-grayA-+4": {
        "value": "#33331421",
        "type": "color"
      },
      "warm-grayA-+5": {
        "value": "#22220217",
        "type": "color"
      },
      "warm-grayA-+6": {
        "value": "#2f2f0e0f",
        "type": "color"
      },
      "warm-grayA-+7": {
        "value": "#2f2f2d0a",
        "type": "color"
      },
      "warm-grayA-+8": {
        "value": "#52525205",
        "type": "color"
      }
    },
    "whiteAlpha": {
      "whiteA--12": {
        "value": "#ffffff05",
        "type": "color"
      },
      "whiteA--11": {
        "value": "#ffffff08",
        "type": "color"
      },
      "whiteA--10": {
        "value": "#ffffff0d",
        "type": "color"
      },
      "whiteA--9": {
        "value": "#ffffff14",
        "type": "color"
      },
      "whiteA--8": {
        "value": "#ffffff1a",
        "type": "color"
      },
      "whiteA--7": {
        "value": "#ffffff1f",
        "type": "color"
      },
      "whiteA--6": {
        "value": "#ffffff3d",
        "type": "color"
      },
      "whiteA--5": {
        "value": "#ffffff66",
        "type": "color"
      },
      "whiteA--4": {
        "value": "#ffffffa3",
        "type": "color"
      },
      "whiteA--3": {
        "value": "#ffffffad",
        "type": "color"
      },
      "whiteA--2": {
        "value": "#ffffffb8",
        "type": "color"
      },
      "whiteA--1": {
        "value": "#ffffffd1",
        "type": "color"
      },
      "whiteA-0": {
        "value": "#ffffff",
        "type": "color"
      }
    },
    "red": {
      "red--4": {
        "value": "#4a0d0d",
        "type": "color"
      },
      "red--3": {
        "value": "#6f2020",
        "type": "color"
      },
      "red--2": {
        "value": "#952d2d",
        "type": "color"
      },
      "red--1": {
        "value": "#a13636",
        "type": "color"
      },
      "red-0": {
        "value": "#c53434",
        "type": "color"
      },
      "red-+1": {
        "value": "#f26363",
        "type": "color"
      },
      "red-+2": {
        "value": "#f49090",
        "type": "color"
      },
      "red-+3": {
        "value": "#fccfcf",
        "type": "color"
      },
      "red-+4": {
        "value": "#fcd9d9",
        "type": "color"
      },
      "red-+5": {
        "value": "#fee7e7",
        "type": "color"
      },
      "red-+6": {
        "value": "#ffebeb",
        "type": "color"
      },
      "red-+7": {
        "value": "#fef5f5",
        "type": "color"
      },
      "red-+8": {
        "value": "#fffafa",
        "type": "color"
      }
    },
    "magenta": {
      "magenta--4": {
        "value": "#410b2f",
        "type": "color"
      },
      "magenta--3": {
        "value": "#671e4d",
        "type": "color"
      },
      "magenta--2": {
        "value": "#892969",
        "type": "color"
      },
      "magenta--1": {
        "value": "#953274",
        "type": "color"
      },
      "magenta-0": {
        "value": "#b12f86",
        "type": "color"
      },
      "magenta-+1": {
        "value": "#de5eb3",
        "type": "color"
      },
      "magenta-+2": {
        "value": "#ec89cb",
        "type": "color"
      },
      "magenta-+3": {
        "value": "#f7cae8",
        "type": "color"
      },
      "magenta-+4": {
        "value": "#fbd5ee",
        "type": "color"
      },
      "magenta-+5": {
        "value": "#fde2f4",
        "type": "color"
      },
      "magenta-+6": {
        "value": "#fdedf8",
        "type": "color"
      },
      "magenta-+7": {
        "value": "#fef6fb",
        "type": "color"
      },
      "magenta-+8": {
        "value": "#fffafd",
        "type": "color"
      }
    },
    "purple": {
      "purple--4": {
        "value": "#410b2f",
        "type": "color"
      },
      "purple--3": {
        "value": "#5b1e67",
        "type": "color"
      },
      "purple--2": {
        "value": "#792989",
        "type": "color"
      },
      "purple--1": {
        "value": "#853295",
        "type": "color"
      },
      "purple-0": {
        "value": "#9939ac",
        "type": "color"
      },
      "purple-+1": {
        "value": "#c466db",
        "type": "color"
      },
      "purple-+2": {
        "value": "#d98eec",
        "type": "color"
      },
      "purple-+3": {
        "value": "#f4caf7",
        "type": "color"
      },
      "purple-+4": {
        "value": "#f5d5fb",
        "type": "color"
      },
      "purple-+5": {
        "value": "#f8e2fd",
        "type": "color"
      },
      "purple-+6": {
        "value": "#faedfd",
        "type": "color"
      },
      "purple-+7": {
        "value": "#fdf5ff",
        "type": "color"
      },
      "purple-+8": {
        "value": "#fefaff",
        "type": "color"
      }
    },
    "violet": {
      "violet--4": {
        "value": "#201263",
        "type": "color"
      },
      "violet--3": {
        "value": "#39288a",
        "type": "color"
      },
      "violet--2": {
        "value": "#4e38bc",
        "type": "color"
      },
      "violet--1": {
        "value": "#573fcf",
        "type": "color"
      },
      "violet-0": {
        "value": "#634eca",
        "type": "color"
      },
      "violet-+1": {
        "value": "#927ef1",
        "type": "color"
      },
      "violet-+2": {
        "value": "#aba2fb",
        "type": "color"
      },
      "violet-+3": {
        "value": "#dcd6ff",
        "type": "color"
      },
      "violet-+4": {
        "value": "#e3e0ff",
        "type": "color"
      },
      "violet-+5": {
        "value": "#eeebff",
        "type": "color"
      },
      "violet-+6": {
        "value": "#f3f0ff",
        "type": "color"
      },
      "violet-+7": {
        "value": "#f7f5ff",
        "type": "color"
      },
      "violet-+8": {
        "value": "#fbfaff",
        "type": "color"
      }
    },
    "blue": {
      "blue--4": {
        "value": "#041f5d",
        "type": "color"
      },
      "blue--3": {
        "value": "#113997",
        "type": "color"
      },
      "blue--2": {
        "value": "#1e4fc2",
        "type": "color"
      },
      "blue--1": {
        "value": "#2759ce",
        "type": "color"
      },
      "blue-0": {
        "value": "#3061d5",
        "type": "color"
      },
      "blue-+1": {
        "value": "#6691f4",
        "type": "color"
      },
      "blue-+2": {
        "value": "#8eb0fb",
        "type": "color"
      },
      "blue-+3": {
        "value": "#ccdcff",
        "type": "color"
      },
      "blue-+4": {
        "value": "#d6e3ff",
        "type": "color"
      },
      "blue-+5": {
        "value": "#e5eeff",
        "type": "color"
      },
      "blue-+6": {
        "value": "#ebf0ff",
        "type": "color"
      },
      "blue-+7": {
        "value": "#f5f8ff",
        "type": "color"
      },
      "blue-+8": {
        "value": "#fafbff",
        "type": "color"
      }
    },
    "cyan": {
      "cyan--4": {
        "value": "#002742",
        "type": "color"
      },
      "cyan--3": {
        "value": "#0c456e",
        "type": "color"
      },
      "cyan--2": {
        "value": "#165c8d",
        "type": "color"
      },
      "cyan--1": {
        "value": "#1b679d",
        "type": "color"
      },
      "cyan-0": {
        "value": "#0870ba",
        "type": "color"
      },
      "cyan-+1": {
        "value": "#5699dc",
        "type": "color"
      },
      "cyan-+2": {
        "value": "#79bcf6",
        "type": "color"
      },
      "cyan-+3": {
        "value": "#c2e2ff",
        "type": "color"
      },
      "cyan-+4": {
        "value": "#cce7ff",
        "type": "color"
      },
      "cyan-+5": {
        "value": "#e0f1ff",
        "type": "color"
      },
      "cyan-+6": {
        "value": "#ebf5ff",
        "type": "color"
      },
      "cyan-+7": {
        "value": "#f0f9ff",
        "type": "color"
      },
      "cyan-+8": {
        "value": "#fafdff",
        "type": "color"
      }
    },
    "teal": {
      "teal--4": {
        "value": "#012a37",
        "type": "color"
      },
      "teal--3": {
        "value": "#0a495c",
        "type": "color"
      },
      "teal--2": {
        "value": "#196076",
        "type": "color"
      },
      "teal--1": {
        "value": "#196c85",
        "type": "color"
      },
      "teal-0": {
        "value": "#077597",
        "type": "color"
      },
      "teal-+1": {
        "value": "#4f9eba",
        "type": "color"
      },
      "teal-+2": {
        "value": "#7ac0dc",
        "type": "color"
      },
      "teal-+3": {
        "value": "#b8e8f5",
        "type": "color"
      },
      "teal-+4": {
        "value": "#c5ecf7",
        "type": "color"
      },
      "teal-+5": {
        "value": "#e0f3fa",
        "type": "color"
      },
      "teal-+6": {
        "value": "#e8f7fc",
        "type": "color"
      },
      "teal-+7": {
        "value": "#f0fbff",
        "type": "color"
      },
      "teal-+8": {
        "value": "#fafeff",
        "type": "color"
      }
    },
    "aquamarine": {
      "aquamarine--4": {
        "value": "#012d26",
        "type": "color"
      },
      "aquamarine--3": {
        "value": "#0d4a42",
        "type": "color"
      },
      "aquamarine--2": {
        "value": "#15665b",
        "type": "color"
      },
      "aquamarine--1": {
        "value": "#1a7061",
        "type": "color"
      },
      "aquamarine-0": {
        "value": "#097b68",
        "type": "color"
      },
      "aquamarine-+1": {
        "value": "#3da496",
        "type": "color"
      },
      "aquamarine-+2": {
        "value": "#6ec9bf",
        "type": "color"
      },
      "aquamarine-+3": {
        "value": "#bee9e4",
        "type": "color"
      },
      "aquamarine-+4": {
        "value": "#c5f2ec",
        "type": "color"
      },
      "aquamarine-+5": {
        "value": "#daf6f3",
        "type": "color"
      },
      "aquamarine-+6": {
        "value": "#e2f8f5",
        "type": "color"
      },
      "aquamarine-+7": {
        "value": "#f0faf9",
        "type": "color"
      },
      "aquamarine-+8": {
        "value": "#fbfefe",
        "type": "color"
      }
    },
    "green": {
      "green--4": {
        "value": "#0a2e0b",
        "type": "color"
      },
      "green--3": {
        "value": "#135315",
        "type": "color"
      },
      "green--2": {
        "value": "#246626",
        "type": "color"
      },
      "green--1": {
        "value": "#2f6f2f",
        "type": "color"
      },
      "green-0": {
        "value": "#347434",
        "type": "color"
      },
      "green-+1": {
        "value": "#55a555",
        "type": "color"
      },
      "green-+2": {
        "value": "#87c987",
        "type": "color"
      },
      "green-+3": {
        "value": "#c6ecc6",
        "type": "color"
      },
      "green-+4": {
        "value": "#cff2cf",
        "type": "color"
      },
      "green-+5": {
        "value": "#dff6df",
        "type": "color"
      },
      "green-+6": {
        "value": "#e6f9e6",
        "type": "color"
      },
      "green-+7": {
        "value": "#f4fbf4",
        "type": "color"
      },
      "green-+8": {
        "value": "#fbfefb",
        "type": "color"
      }
    },
    "orange": {
      "orange--4": {
        "value": "#492909",
        "type": "color"
      },
      "orange--3": {
        "value": "#7a4510",
        "type": "color"
      },
      "orange--2": {
        "value": "#a05c1c",
        "type": "color"
      },
      "orange--1": {
        "value": "#b4610e",
        "type": "color"
      },
      "orange-0": {
        "value": "#f59638",
        "type": "color"
      },
      "orange-+1": {
        "value": "#f6a351",
        "type": "color"
      },
      "orange-+2": {
        "value": "#feb871",
        "type": "color"
      },
      "orange-+3": {
        "value": "#ffd4a8",
        "type": "color"
      },
      "orange-+4": {
        "value": "#fcdec0",
        "type": "color"
      },
      "orange-+5": {
        "value": "#ffe8d1",
        "type": "color"
      },
      "orange-+6": {
        "value": "#fff0e0",
        "type": "color"
      },
      "orange-+7": {
        "value": "#fff5eb",
        "type": "color"
      },
      "orange-+8": {
        "value": "#fffcfa",
        "type": "color"
      }
    },
    "transparent": {
      "transparent": {
        "value": "#ffffff00",
        "type": "color"
      }
    }
  },
  "borderWidth": {
    "border-width-focus": {
      "value": "2px",
      "type": "borderWidth"
    },
    "border-width-none": {
      "value": "0px",
      "type": "borderWidth"
    },
    "border-width-sm": {
      "value": "1px",
      "type": "borderWidth"
    },
    "border-width-md": {
      "value": "2px",
      "type": "borderWidth"
    },
    "border-width-lg": {
      "value": "4px",
      "type": "borderWidth"
    },
    "border-width-xl": {
      "value": "8px",
      "type": "borderWidth"
    },
    "border-width-0": {
      "value": "0px",
      "type": "borderWidth"
    },
    "border-width-100": {
      "value": "1px",
      "type": "borderWidth"
    },
    "border-width-200": {
      "value": "2px",
      "type": "borderWidth"
    },
    "border-width-400": {
      "value": "4px",
      "type": "borderWidth"
    },
    "border-width-800": {
      "value": "8px",
      "type": "borderWidth"
    }
  },
  "borderRadius": {
    "border-radius-none": {
      "value": "0px",
      "type": "borderRadius"
    },
    "border-radius-sm": {
      "value": "2px",
      "type": "borderRadius"
    },
    "border-radius-md": {
      "value": "4px",
      "type": "borderRadius"
    },
    "border-radius-lg": {
      "value": "8px",
      "type": "borderRadius"
    },
    "border-radius-xl": {
      "value": "12px",
      "type": "borderRadius"
    },
    "border-radius-2xl": {
      "value": "16px",
      "type": "borderRadius"
    },
    "border-radius-3xl": {
      "value": "20px",
      "type": "borderRadius"
    },
    "border-radius-4xl": {
      "value": "24px",
      "type": "borderRadius"
    },
    "border-radius-full": {
      "value": 999,
      "type": "borderRadius"
    },
    "border-radius-0": {
      "value": "0px",
      "type": "borderRadius"
    },
    "border-radius-25": {
      "value": "2px",
      "type": "borderRadius"
    },
    "border-radius-50": {
      "value": "4px",
      "type": "borderRadius"
    },
    "border-radius-100": {
      "value": "8px",
      "type": "borderRadius"
    },
    "border-radius-150": {
      "value": "12px",
      "type": "borderRadius"
    },
    "border-radius-200": {
      "value": "16px",
      "type": "borderRadius"
    },
    "border-radius-250": {
      "value": "20px",
      "type": "borderRadius"
    },
    "border-radius-300": {
      "value": "24px",
      "type": "borderRadius"
    },
    "border-radius-999": {
      "value": 999,
      "type": "borderRadius"
    }
  },
  "size": {
    "size-3xl": {
      "value": "72px",
      "type": "sizing"
    },
    "size-2xl": {
      "value": "64px",
      "type": "sizing"
    },
    "size-xl": {
      "value": "56px",
      "type": "sizing"
    },
    "size-lg": {
      "value": "48px",
      "type": "sizing"
    },
    "size-md": {
      "value": "40px",
      "type": "sizing"
    },
    "size-sm": {
      "value": "32px",
      "type": "sizing"
    },
    "size-xs": {
      "value": "24px",
      "type": "sizing"
    },
    "size-2xs": {
      "value": "20px",
      "type": "sizing"
    },
    "size-3xs": {
      "value": "16px",
      "type": "sizing"
    }
  },
  "space": {
    "padding": {
      "padding-none": {
        "value": "0px",
        "type": "spacing"
      },
      "padding-2xs": {
        "value": "2px",
        "type": "spacing"
      },
      "padding-xs": {
        "value": "4px",
        "type": "spacing"
      },
      "padding-sm": {
        "value": "8px",
        "type": "spacing"
      },
      "padding-md": {
        "value": "12px",
        "type": "spacing"
      },
      "padding-lg": {
        "value": "16px",
        "type": "spacing"
      },
      "padding-2xl": {
        "value": "24px",
        "type": "spacing"
      },
      "padding-3xl": {
        "value": "32px",
        "type": "spacing"
      },
      "padding-4xl": {
        "value": "40px",
        "type": "spacing"
      },
      "padding-5xl": {
        "value": "44px",
        "type": "spacing"
      },
      "padding-6xl": {
        "value": "64px",
        "type": "spacing"
      }
    },
    "gap": {
      "gap-none": {
        "value": "0px",
        "type": "spacing"
      },
      "gap-2xs": {
        "value": "2px",
        "type": "spacing"
      },
      "gap-xs": {
        "value": "4px",
        "type": "spacing"
      },
      "gap-sm": {
        "value": "8px",
        "type": "spacing"
      },
      "gap-md": {
        "value": "12px",
        "type": "spacing"
      },
      "gap-lg": {
        "value": "16px",
        "type": "spacing"
      },
      "gap-xl": {
        "value": "24px",
        "type": "spacing"
      },
      "gap-2xl": {
        "value": "32px",
        "type": "spacing"
      },
      "gap-3xl": {
        "value": "44px",
        "type": "spacing"
      }
    }
  },
  "opacity": {
    "opacity-disabled": {
      "value": 0.5,
      "type": "opacity"
    },
    "opacity-0": {
      "value": 0,
      "type": "opacity"
    },
    "opacity-50": {
      "value": 0.5,
      "type": "opacity"
    },
    "opacity-100": {
      "value": 1,
      "type": "opacity"
    }
  },
  "typography": {
    "code": {
      "typography-code-sm": {
        "value": {
          "fontFamily": "Noto Sans Mono",
          "fontWeight": 400,
          "lineHeight": "16px",
          "fontSize": "12px",
          "letterSpacing": 0
        },
        "type": "typography"
      },
      "typography-code-md": {
        "value": {
          "fontFamily": "Noto Sans Mono",
          "fontWeight": 400,
          "lineHeight": "20px",
          "fontSize": "14px",
          "letterSpacing": "-0.006em"
        },
        "type": "typography"
      },
      "typography-code-lg": {
        "value": {
          "fontFamily": "Noto Sans Mono",
          "fontWeight": 400,
          "lineHeight": "22px",
          "fontSize": "16px",
          "letterSpacing": "-0.011em"
        },
        "type": "typography"
      }
    },
    "utility": {
      "typography-utility-sm": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 500,
          "lineHeight": "16px",
          "fontSize": "12px",
          "letterSpacing": 0
        },
        "type": "typography"
      },
      "typography-utility-md": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 500,
          "lineHeight": "20px",
          "fontSize": "14px",
          "letterSpacing": "-0.006em"
        },
        "type": "typography"
      },
      "typography-utility-lg": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 500,
          "lineHeight": "22px",
          "fontSize": "16px",
          "letterSpacing": "-0.011em"
        },
        "type": "typography"
      }
    },
    "body": {
      "typography-body-sm": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 400,
          "lineHeight": "16px",
          "fontSize": "12px",
          "letterSpacing": 0
        },
        "type": "typography"
      },
      "typography-body-md": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 400,
          "lineHeight": "20px",
          "fontSize": "14px",
          "letterSpacing": "-0.006em"
        },
        "type": "typography"
      },
      "typography-body-lg": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 400,
          "lineHeight": "22px",
          "fontSize": "16px",
          "letterSpacing": "-0.011em"
        },
        "type": "typography"
      }
    },
    "heading": {
      "typography-heading-sm": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "16px",
          "fontSize": "12px",
          "letterSpacing": 0
        },
        "type": "typography"
      },
      "typography-heading-md": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "20px",
          "fontSize": "14px",
          "letterSpacing": "-0.006em"
        },
        "type": "typography"
      },
      "typography-heading-lg": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "22px",
          "fontSize": "16px",
          "letterSpacing": "-0.011em"
        },
        "type": "typography"
      },
      "typography-heading-xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "24px",
          "fontSize": "18px",
          "letterSpacing": "-0.014em"
        },
        "type": "typography"
      },
      "typography-heading-2xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "26px",
          "fontSize": "20px",
          "letterSpacing": "-0.017em"
        },
        "type": "typography"
      },
      "typography-heading-3xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "32px",
          "fontSize": "24px",
          "letterSpacing": "-0.019em"
        },
        "type": "typography"
      },
      "typography-heading-4xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "38px",
          "fontSize": "28px",
          "letterSpacing": "-0.021em"
        },
        "type": "typography"
      },
      "typography-heading-5xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "42px",
          "fontSize": "32px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      },
      "typography-heading-6xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "48px",
          "fontSize": "36px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      },
      "typography-heading-7xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "56px",
          "fontSize": "42px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      },
      "typography-heading-8xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "58px",
          "fontSize": "48px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      },
      "typography-heading-9xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "66px",
          "fontSize": "54px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      }
    },
    "display": {
      "typography-display-sm": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "66px",
          "fontSize": "54px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      },
      "typography-display-md": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "72px",
          "fontSize": "60px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      },
      "typography-display-lg": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "82px",
          "fontSize": "68px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      },
      "typography-display-xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "92px",
          "fontSize": "76px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      },
      "typography-display-2xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "102px",
          "fontSize": "84px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      },
      "typography-display-3xl": {
        "value": {
          "fontFamily": "Noto Sans",
          "fontWeight": 700,
          "lineHeight": "112px",
          "fontSize": "92px",
          "letterSpacing": "-0.022em"
        },
        "type": "typography"
      }
    }
  },
  "dimension": {
    "dimension-0": {
      "value": "0px",
      "type": "dimension"
    },
    "dimension-25": {
      "value": "2px",
      "type": "dimension"
    },
    "dimension-50": {
      "value": "4px",
      "type": "dimension"
    },
    "dimension-100": {
      "value": "8px",
      "type": "dimension"
    },
    "dimension-150": {
      "value": "12px",
      "type": "dimension"
    },
    "dimension-200": {
      "value": "16px",
      "type": "dimension"
    },
    "dimension-250": {
      "value": "20px",
      "type": "dimension"
    },
    "dimension-300": {
      "value": "24px",
      "type": "dimension"
    },
    "dimension-400": {
      "value": "32px",
      "type": "dimension"
    },
    "dimension-500": {
      "value": "40px",
      "type": "dimension"
    },
    "dimension-550": {
      "value": "44px",
      "type": "dimension"
    },
    "dimension-600": {
      "value": "48px",
      "type": "dimension"
    },
    "dimension-700": {
      "value": "56px",
      "type": "dimension"
    },
    "dimension-800": {
      "value": "64px",
      "type": "dimension"
    },
    "dimension-900": {
      "value": "72px",
      "type": "dimension"
    },
    "dimension-1000": {
      "value": "80px",
      "type": "dimension"
    },
    "dimension-1200": {
      "value": "96px",
      "type": "dimension"
    },
    "dimension-1500": {
      "value": "120px",
      "type": "dimension"
    },
    "dimension-1600": {
      "value": "128px",
      "type": "dimension"
    }
  },
  "elevation": {
    "bottom": {
      "elevation-bottom-100": {
        "value": {
          "x": 0,
          "y": 1,
          "blur": 2,
          "spread": 0,
          "color": "#1b242c1f",
          "type": "dropShadow"
        },
        "type": "boxShadow"
      },
      "elevation-bottom-200": {
        "value": [
          {
            "x": 0,
            "y": 2,
            "blur": 2,
            "spread": -1,
            "color": "#1b242c0a",
            "type": "dropShadow"
          },
          {
            "x": 0,
            "y": 2,
            "blur": 8,
            "spread": -1,
            "color": "#1b242c14",
            "type": "dropShadow"
          }
        ],
        "type": "boxShadow"
      },
      "elevation-bottom-300": {
        "value": [
          {
            "x": 0,
            "y": 2,
            "blur": 2,
            "spread": -1,
            "color": "#1b242c0a",
            "type": "dropShadow"
          },
          {
            "x": 0,
            "y": 8,
            "blur": 16,
            "spread": -2,
            "color": "#1b242c1f",
            "type": "dropShadow"
          }
        ],
        "type": "boxShadow"
      },
      "elevation-bottom-400": {
        "value": [
          {
            "x": 0,
            "y": 2,
            "blur": 2,
            "spread": -1,
            "color": "#1b242c0a",
            "type": "dropShadow"
          },
          {
            "x": 0,
            "y": 16,
            "blur": 24,
            "spread": -6,
            "color": "#1b242c29",
            "type": "dropShadow"
          }
        ],
        "type": "boxShadow"
      }
    },
    "top": {
      "elevation-top-100": {
        "value": {
          "x": 0,
          "y": -1,
          "blur": 2,
          "spread": 0,
          "color": "#1b242c1f",
          "type": "dropShadow"
        },
        "type": "boxShadow"
      },
      "elevation-top-200": {
        "value": [
          {
            "x": 0,
            "y": -2,
            "blur": 2,
            "spread": -1,
            "color": "#1b242c0a",
            "type": "dropShadow"
          },
          {
            "x": 0,
            "y": -2,
            "blur": 8,
            "spread": -1,
            "color": "#1b242c14",
            "type": "dropShadow"
          }
        ],
        "type": "boxShadow"
      },
      "elevation-top-300": {
        "value": [
          {
            "x": 0,
            "y": -2,
            "blur": 2,
            "spread": -1,
            "color": "#1b242c0a",
            "type": "dropShadow"
          },
          {
            "x": 0,
            "y": -8,
            "blur": 16,
            "spread": -2,
            "color": "#1b242c1f",
            "type": "dropShadow"
          }
        ],
        "type": "boxShadow"
      },
      "elevation-top-400": {
        "value": [
          {
            "x": 0,
            "y": -2,
            "blur": 2,
            "spread": -1,
            "color": "#1b242c0a",
            "type": "dropShadow"
          },
          {
            "x": 0,
            "y": -16,
            "blur": 24,
            "spread": -6,
            "color": "#1b242c29",
            "type": "dropShadow"
          }
        ],
        "type": "boxShadow"
      }
    }
  },
  "fontFamily": {
    "font-family-sans": {
      "value": "Noto Sans",
      "type": "fontFamilies"
    },
    "font-family-serif": {
      "value": "Noto Serif",
      "type": "fontFamilies"
    },
    "font-family-mono": {
      "value": "Noto Sans Mono",
      "type": "fontFamilies"
    }
  },
  "fontSize": {
    "font-size-100": {
      "value": "8px",
      "type": "fontSizes"
    },
    "font-size-125": {
      "value": "10px",
      "type": "fontSizes"
    },
    "font-size-150": {
      "value": "12px",
      "type": "fontSizes"
    },
    "font-size-175": {
      "value": "14px",
      "type": "fontSizes"
    },
    "font-size-200": {
      "value": "16px",
      "type": "fontSizes"
    },
    "font-size-225": {
      "value": "18px",
      "type": "fontSizes"
    },
    "font-size-250": {
      "value": "20px",
      "type": "fontSizes"
    },
    "font-size-300": {
      "value": "24px",
      "type": "fontSizes"
    },
    "font-size-350": {
      "value": "28px",
      "type": "fontSizes"
    },
    "font-size-400": {
      "value": "32px",
      "type": "fontSizes"
    },
    "font-size-450": {
      "value": "36px",
      "type": "fontSizes"
    },
    "font-size-525": {
      "value": "42px",
      "type": "fontSizes"
    },
    "font-size-600": {
      "value": "48px",
      "type": "fontSizes"
    },
    "font-size-675": {
      "value": "54px",
      "type": "fontSizes"
    },
    "font-size-750": {
      "value": "60px",
      "type": "fontSizes"
    },
    "font-size-850": {
      "value": "68px",
      "type": "fontSizes"
    },
    "font-size-950": {
      "value": "76px",
      "type": "fontSizes"
    },
    "font-size-1050": {
      "value": "84px",
      "type": "fontSizes"
    },
    "font-size-1150": {
      "value": "92px",
      "type": "fontSizes"
    }
  },
  "fontWeight": {
    "font-weight-300": {
      "value": 300,
      "type": "fontWeights"
    },
    "font-weight-400": {
      "value": 400,
      "type": "fontWeights"
    },
    "font-weight-500": {
      "value": 500,
      "type": "fontWeights"
    },
    "font-weight-600": {
      "value": 600,
      "type": "fontWeights"
    },
    "font-weight-700": {
      "value": 700,
      "type": "fontWeights"
    }
  },
  "letterSpacing": {
    "letterSpacing-0": {
      "value": 0,
      "type": "letterSpacing"
    },
    "letterSpacing-100": {
      "value": "-0.006em",
      "type": "letterSpacing"
    },
    "letterSpacing-200": {
      "value": "-0.011em",
      "type": "letterSpacing"
    },
    "letterSpacing-300": {
      "value": "-0.014em",
      "type": "letterSpacing"
    },
    "letterSpacing-400": {
      "value": "-0.017em",
      "type": "letterSpacing"
    },
    "letterSpacing-500": {
      "value": "-0.019em",
      "type": "letterSpacing"
    },
    "letterSpacing-600": {
      "value": "-0.021em",
      "type": "letterSpacing"
    },
    "letterSpacing-700": {
      "value": "-0.022em",
      "type": "letterSpacing"
    }
  },
  "lineHeight": {
    "lineHeight-value-150": {
      "value": "12px",
      "type": "lineHeights"
    },
    "lineHeight-value-200": {
      "value": "16px",
      "type": "lineHeights"
    },
    "lineHeight-value-250": {
      "value": "20px",
      "type": "lineHeights"
    },
    "lineHeight-value-275": {
      "value": "22px",
      "type": "lineHeights"
    },
    "lineHeight-value-300": {
      "value": "24px",
      "type": "lineHeights"
    },
    "lineHeight-value-325": {
      "value": "26px",
      "type": "lineHeights"
    },
    "lineHeight-value-400": {
      "value": "32px",
      "type": "lineHeights"
    },
    "lineHeight-value-475": {
      "value": "38px",
      "type": "lineHeights"
    },
    "lineHeight-value-525": {
      "value": "42px",
      "type": "lineHeights"
    },
    "lineHeight-value-600": {
      "value": "48px",
      "type": "lineHeights"
    },
    "lineHeight-value-700": {
      "value": "56px",
      "type": "lineHeights"
    },
    "lineHeight-value-725": {
      "value": "58px",
      "type": "lineHeights"
    },
    "lineHeight-value-825": {
      "value": "66px",
      "type": "lineHeights"
    },
    "lineHeight-value-900": {
      "value": "72px",
      "type": "lineHeights"
    },
    "lineHeight-value-1025": {
      "value": "82px",
      "type": "lineHeights"
    },
    "lineHeight-value-1150": {
      "value": "92px",
      "type": "lineHeights"
    },
    "lineHeight-value-1275": {
      "value": "102px",
      "type": "lineHeights"
    },
    "lineHeight-value-1400": {
      "value": "112px",
      "type": "lineHeights"
    }
  },
  "tokenSetOrder": {
    "0": {
      "value": "global",
      "type": "other"
    },
    "1": {
      "value": "alias",
      "type": "other"
    },
    "2": {
      "value": "component/light",
      "type": "other"
    },
    "3": {
      "value": "component/dark",
      "type": "other"
    }
  },
  "Default": {
    "id": "13adb0cef243b524e04eefe7b56e01835a8e9860",
    "$figmaStyleReferences": {},
    "selectedTokenSets": {
      "global": "enabled"
    },
    "group": "Global",
    "$figmaCollectionId": "VariableCollectionId:15:2575",
    "$figmaModeId": "15:9",
    "$figmaVariableReferences": {
      "color.coolGray.cool-gray--4": "8a9e48fa619a97dc13ca2a06fbee199fe8c4dfa7",
      "color.coolGray.cool-gray--3": "6c3c485c17c508996367ca45350141e440b82755",
      "color.coolGray.cool-gray--2": "ee145f094461bc07b667e952acc8dea6eb58648b",
      "color.coolGray.cool-gray--1": "47802f4218a24b982d6a66be17a074042f84686d",
      "color.coolGray.cool-gray-0": "3d5b76406ee9c19c1e3f73660b1b0f3e2a1028bf",
      "color.coolGray.cool-gray-+1": "fabf68445b0d7b405caa0fa673e4a2d32c8cec1a",
      "color.coolGray.cool-gray-+2": "db9bc5dcbfa4c7d6c7bd848a71774534e4750e7b",
      "color.coolGray.cool-gray-+3": "3f8bfcee87a1d3644c48b3af45e2217e0e3a8379",
      "color.coolGray.cool-gray-+4": "1314ad68cbb357e6530fc06a9d04634937bff423",
      "color.coolGray.cool-gray-+5": "da9de041f8a57469a39ac8757a6b71202bba4192",
      "color.coolGray.cool-gray-+6": "986463186c2d8930a6df658c3a34b99dba41cb95",
      "color.coolGray.cool-gray-+7": "461dc01b8ad819e2c8d96e6164256cf72353d04c",
      "color.coolGray.cool-gray-+8": "607a2ae2ddfcbac452c95dd52bfe8d8085fabca0",
      "color.coolGrayAlpha.cool-grayA--4": "fd5984ca9f2226bca5e48e8fba93f609324e32d3",
      "color.coolGrayAlpha.cool-grayA--3": "03f59c72d869cccca0468b2c5d06ddfc1a2a0afa",
      "color.coolGrayAlpha.cool-grayA--2": "dceec498e0131fd9993b8ca486cc8816fb26d336",
      "color.coolGrayAlpha.cool-grayA--1": "b279f36ac580ac8310bd954038d6ab1169f45259",
      "color.coolGrayAlpha.cool-grayA-0": "e798a933d2fa618969f06254cf64948d183e1117",
      "color.coolGrayAlpha.cool-grayA-+1": "badcba0a61a6376c23151dae6fd919596daa024d",
      "color.coolGrayAlpha.cool-grayA-+2": "777c158d61b3238bbb83e50d02973a5d18858a63",
      "color.coolGrayAlpha.cool-grayA-+3": "2bb219326ed58e7d25402517ede50d03ca980eb2",
      "color.coolGrayAlpha.cool-grayA-+4": "6136e04727be51eef854ed33cec7ad50b89463dd",
      "color.coolGrayAlpha.cool-grayA-+5": "58215abc3394c71b1e459d1e7b7af795b52ca37a",
      "color.coolGrayAlpha.cool-grayA-+6": "cc56a4d1b898c9be2419310e223aa01e6a49c1a4",
      "color.coolGrayAlpha.cool-grayA-+7": "cbd46a2824e7f4a6c0eca0c4ed4db074de4e5e7a",
      "color.coolGrayAlpha.cool-grayA-+8": "66e81bf72b8933e544c05dc2e9b586d724c48964",
      "color.neutralGray.neutral-gray--4": "e6b06da0f56d946555ea5d2badb8a87cf3430cdc",
      "color.neutralGray.neutral-gray--3": "9eebd7021cde98ba0637afb2a95606b1bd1c0fad",
      "color.neutralGray.neutral-gray--2": "91306a05fd765e180e20768c69a7985fd329a141",
      "color.neutralGray.neutral-gray--1": "4de957241c8ea049f99db6cb45f5399ecfec6e5e",
      "color.neutralGray.neutral-gray-0": "fb30ca8eab64ed6872433e48ebf40c11fd5d014d",
      "color.neutralGray.neutral-gray-+1": "49d006d62cd1220ac7c18e075cb53cc5a1f3bd34",
      "color.neutralGray.neutral-gray-+2": "578d82eb0d0eac94008dcd963ccf2a266691b96c",
      "color.neutralGray.neutral-gray-+3": "a08db8cad466f8227367273f8d807dbfd595bba0",
      "color.neutralGray.neutral-gray-+4": "6cd20c119f45b99bccb69c58d76cd49696d606da",
      "color.neutralGray.neutral-gray-+5": "f3f1e755230c3935838f74e38477ef3a291ad64b",
      "color.neutralGray.neutral-gray-+6": "06e7f2391a713df5986a86a607d8a199db9f3708",
      "color.neutralGray.neutral-gray-+7": "e14df1dd59b040188fda976bf5ac3c61d5f9cde6",
      "color.neutralGray.neutral-gray-+8": "2eab9a2ad3fea97e8b27b7807eea28b9221035c2",
      "color.neutralGrayAlpha.neutral-grayA--4": "3b5e442e2bdee19013f3e064662eabf380d8c3f1",
      "color.neutralGrayAlpha.neutral-grayA--3": "2c608581d707f91b1b784a06cf5b62fdd63819d6",
      "color.neutralGrayAlpha.neutral-grayA--2": "ac5a60d7be6afbc8892823ab476af08d45e3ee4b",
      "color.neutralGrayAlpha.neutral-grayA--1": "c648dd0ec72ee45d11e1455273b69d344e58c995",
      "color.neutralGrayAlpha.neutral-grayA-0": "bd1252d6a5b0c34cb215aea678c6acffce54dbe9",
      "color.neutralGrayAlpha.neutral-grayA-+1": "c49192d6dac077e9eeef668372ad66f6dec43a18",
      "color.neutralGrayAlpha.neutral-grayA-+2": "5b078555d933160d0d97e1e0b945d5b45e0566aa",
      "color.neutralGrayAlpha.neutral-grayA-+3": "8434d87a5285252e97fa8635eb4b171ea5450c7b",
      "color.neutralGrayAlpha.neutral-grayA-+4": "bb48b6c160523f12a20662ef949f64cf7be861cc",
      "color.neutralGrayAlpha.neutral-grayA-+5": "e58fedda609d366386fadc87cb5e4c4cfd76d11c",
      "color.neutralGrayAlpha.neutral-grayA-+6": "30e2868f06f04fd6292298495f723f8e8559b437",
      "color.neutralGrayAlpha.neutral-grayA-+7": "ee460b662927e8314c74352ef5c7603c27f1a4a4",
      "color.neutralGrayAlpha.neutral-grayA-+8": "66044434d9472394505bb5ba477f89a11fd42db0",
      "color.warmGray.warm-gray--4": "2916dec88c681ddb0db35b83c51f48a0a83608d5",
      "color.warmGray.warm-gray--3": "c694783826b30853c644afddd7cb7336de1c2514",
      "color.warmGray.warm-gray--2": "54ec1a2b81f2dcefb613d276341ce9eced53f489",
      "color.warmGray.warm-gray--1": "95e456e8b77bd0d47c0cf93395bc23883324a181",
      "color.warmGray.warm-gray-0": "e5ec5ae5453c95cd90213590d0d9f6c452479175",
      "color.warmGray.warm-gray-+1": "7d48138cea6c9ab9d420991d1708a655c382f660",
      "color.warmGray.warm-gray-+2": "654d59b79e52dfd44b66c7acfde88ac42b43d7b5",
      "color.warmGray.warm-gray-+3": "bb060771020d00245b2d6887e680f3fd8d136707",
      "color.warmGray.warm-gray-+4": "2312e0bf34af8b28b5ad9967befde81d1f8f0323",
      "color.warmGray.warm-gray-+5": "9e7a37b597119b8fd19bd7f980875938eaf65349",
      "color.warmGray.warm-gray-+6": "67d275a4c2f5a45bae138d2f1a0ad1f1ee4bf253",
      "color.warmGray.warm-gray-+7": "c8bcca8cc82532660b611f54090622c9954a7732",
      "color.warmGray.warm-gray-+8": "7519ce3e444776d5076c44e0a61f34ffd44e9663",
      "color.warmGrayAlpha.warm-grayA--4": "4bc197e3e8fbe036622354380c7f95284797a3c5",
      "color.warmGrayAlpha.warm-grayA--3": "032c3ccfae4128c218eaa4404c51888a12583fa1",
      "color.warmGrayAlpha.warm-grayA--2": "c6968b40eaf74757f290f8ad07bb692cb2862a6f",
      "color.warmGrayAlpha.warm-grayA--1": "e9612376bfdd3a05a72b8be577bef65bfe948635",
      "color.warmGrayAlpha.warm-grayA-0": "1d1204b305d8980373be261758c01f73d05576cf",
      "color.warmGrayAlpha.warm-grayA-+1": "b8acb665c16233c5cbabe7d23bc78e7023ab3d5d",
      "color.warmGrayAlpha.warm-grayA-+2": "c77631a451626f2796d77775e7401b9295e624fa",
      "color.warmGrayAlpha.warm-grayA-+3": "fa319391a16fa91df04730fc502eaa42dcad1082",
      "color.warmGrayAlpha.warm-grayA-+4": "27bea229fe4ffdb1c3069fc94ae2cfb398c6a6d3",
      "color.warmGrayAlpha.warm-grayA-+5": "c7d6c548a8cdca04127ec17ffc8a02550980f741",
      "color.warmGrayAlpha.warm-grayA-+6": "db85af022101b91be846d8662141aac2c1a154ad",
      "color.warmGrayAlpha.warm-grayA-+7": "532e86e6b03238954076acf39e07ef2bb5d60078",
      "color.warmGrayAlpha.warm-grayA-+8": "fc1d41691b0765cef38d0ede9354e0444168252b",
      "color.whiteAlpha.whiteA--12": "bf71099534078c24e9f65c3021aef07e02a0a871",
      "color.whiteAlpha.whiteA--11": "dd409eaac2cf25f887ce64232e6e1db43ee6ade7",
      "color.whiteAlpha.whiteA--10": "9bd07a4711cdcf99dcdbf640f4f68b325bc92964",
      "color.whiteAlpha.whiteA--9": "b70c44f9dbe62ab3fea675cd253f3235b9fdc638",
      "color.whiteAlpha.whiteA--8": "a9474e17c089e6dde5fd74d3b3982cc24dc62519",
      "color.whiteAlpha.whiteA--7": "d28af9c7c502e45fa72236f5e4c6b58e4f2a2343",
      "color.whiteAlpha.whiteA--6": "132e80e55adb22a2516c682a7f626bf9a2fc5fa4",
      "color.whiteAlpha.whiteA--5": "ae2c39a4a8305e9c3b04b284e7cebfec4550cb2e",
      "color.whiteAlpha.whiteA--4": "a3eb36fa8fc914e4ef4b7eacbf5948046e6340e1",
      "color.whiteAlpha.whiteA--3": "546dc8f78d64c1c92c05b8ee65a01ad1a864537d",
      "color.whiteAlpha.whiteA--2": "6ac37454712673905ca63fc39a08a0e6c9146101",
      "color.whiteAlpha.whiteA--1": "8b7e24f0052870c632591600dafce9aa2946fe2e",
      "color.whiteAlpha.whiteA-0": "986849d0f64f1ed8cca7d046dce32bb3c4507a2a",
      "color.red.red--4": "eca29566b6e6fd67d1bbd72e8d5de61e7c78f020",
      "color.red.red--3": "d1e05914788fa0ff4c4b413addb0d8bc73b4ab55",
      "color.red.red--2": "82d891e7608445e4070c652de05a2caa4f7a4709",
      "color.red.red--1": "05f5122b497593fd8aa0c1f653e70fd3670849d3",
      "color.red.red-0": "4a7f640f98c65fc5547eb682152167952512cf2b",
      "color.red.red-+1": "23359f61e7ab06fb1e929e7bef224e0c9f866f4a",
      "color.red.red-+2": "d86bc0ad28caa80c2235e7503f1da02773a7a083",
      "color.red.red-+3": "3a93ffe95be92b609a328d3b3b92fbe499f126bf",
      "color.red.red-+4": "b8c5d360947a6a9414d64ae69f92866456d3b0ad",
      "color.red.red-+5": "163581d53dc1768b04d34dd5f4d28d2c4f1cb595",
      "color.red.red-+6": "64335e4f4a5583de4fd0ee63a004dad492cba7b6",
      "color.red.red-+7": "354f03af631a32d37be06d9f82b03c398b246715",
      "color.red.red-+8": "36081fe968589cb9cbab2f48ac7367ff3898cf04",
      "color.magenta.magenta--4": "68996bba1c0365102c29d652d1eaecb3e7669568",
      "color.magenta.magenta--3": "78da7d4401e1985d3063b10b45a0e69a686c2e99",
      "color.magenta.magenta--2": "a11d2ee432781d7acd0095fd4ea382a6b16c3053",
      "color.magenta.magenta--1": "ac2428f51cd7c6da8cc8cb39298e57e55ae53d4e",
      "color.magenta.magenta-0": "8f91d494eec0b7f2a5492e52b1385c52cd68cef2",
      "color.magenta.magenta-+1": "99655ad45dfc96070cdd9af3bf423dfeced2852c",
      "color.magenta.magenta-+2": "4e8acbfefe92a0dc96e79513339bc40d7b9feec9",
      "color.magenta.magenta-+3": "2fcb44c9adac2f9f72f91c0384991f1a790a7c1d",
      "color.magenta.magenta-+4": "7d2274b991af7f5df5b23398d52ec220f7f1604a",
      "color.magenta.magenta-+5": "f2cec0e89cfe74ad344bac66dfedabc648d0315e",
      "color.magenta.magenta-+6": "4daf3e85ac9fd16864779d4bd29701975f29b84a",
      "color.magenta.magenta-+7": "1d7eab8f3cd25e8592e1bd15ab8d79dc4abf7a38",
      "color.magenta.magenta-+8": "b319cf8fdffa14fc72c7960f650386123b09d62b",
      "color.purple.purple--4": "e1d8507b1e300529148f70df1620740fe86b2d82",
      "color.purple.purple--3": "35129278b94684510adea93fa2f2a55e72f43801",
      "color.purple.purple--2": "b6d6390fc2688d12f52026a30e6ce1a1286d3686",
      "color.purple.purple--1": "9a9f20a60c9241009c311642e7aaed8584caff96",
      "color.purple.purple-0": "96fc05011ac75708a51012d01ebacad9b5213350",
      "color.purple.purple-+1": "00a173694795efdecf24d34709d2d344e9580866",
      "color.purple.purple-+2": "293f13f0d4cc4dc04ae6158db2abac34138e4f43",
      "color.purple.purple-+3": "da69fff575fd0623ff3f251bf0d74acf3bcc9691",
      "color.purple.purple-+4": "00e33713b2d8d148c93d833ff65520bca4bb5699",
      "color.purple.purple-+5": "d601b56c2c6d02c736aa1232ddf11ba6742915ba",
      "color.purple.purple-+6": "b0e7b2142d03f4f9b429e1d9b2e07e1311eba26a",
      "color.purple.purple-+7": "487d3f3079c0661cd20a12019061b17a9675ade0",
      "color.purple.purple-+8": "e59697f23443c164aa6894b4a930b9577d5c3f91",
      "color.violet.violet--4": "516c1eb779aad4c04812d7b9c0aa09541b453438",
      "color.violet.violet--3": "023efacfe460633964c3b0cdae9e7c2f385e5d5b",
      "color.violet.violet--2": "6fdd0665fcfb6830724ab4636a4f1a6de86c7cea",
      "color.violet.violet--1": "c9b2119c67c45ce09095249ac33c4a900f38771a",
      "color.violet.violet-0": "eeba9d524b7ab0259999db8bcec8bb3ad45e6190",
      "color.violet.violet-+1": "aaefaff64d6965afeb1a857b8aab962a38406e8f",
      "color.violet.violet-+2": "b5538ef04115c82232ac91876f2c0ceb4b2de809",
      "color.violet.violet-+3": "86449433aee8583d1b7f225d94d115b59d2dc4d2",
      "color.violet.violet-+4": "8a889758d8c7a206d869350a1b61b0b9ea5dc97a",
      "color.violet.violet-+5": "9277c0542f99d367b3dfa8e8ac0c9917129e20e8",
      "color.violet.violet-+6": "5f61ca0e0c5fd1b0cc9931f2d00dfefb5f410060",
      "color.violet.violet-+7": "7d77336b347627a7a6954c2378c6fd5240756d10",
      "color.violet.violet-+8": "89239f74d5cac9a82ce99a68b2ff1d385e9515c6",
      "color.blue.blue--4": "ec2239dde760711b103e64c0bea47c5972c8022e",
      "color.blue.blue--3": "ca094cc30cff0380ecf2d54a05cd8da66fb8ab50",
      "color.blue.blue--2": "82dee1c1f2827a74dc38f11285df80f631a34660",
      "color.blue.blue--1": "3f890db30d849d7fb23cfb4e3bd594cb31a96479",
      "color.blue.blue-0": "ad9411fb9ebe348a370d1b8ea8d157f1e61f1263",
      "color.blue.blue-+1": "29a36005b2d1144359490defe7dd4b5f6d12b277",
      "color.blue.blue-+2": "1a7c55e6927193ec545fc1f5e13a62bbdcb9b15a",
      "color.blue.blue-+3": "7ca82ff46f0c819d847020eb3fa70e8628d8a200",
      "color.blue.blue-+4": "735c5c2b909f3c5abe17ad584088f30ff0715502",
      "color.blue.blue-+5": "536daf81556f07439b527def6cbd4f75f1e28143",
      "color.blue.blue-+6": "315583c36984b7bae35d4d506a4b6488ae2ae340",
      "color.blue.blue-+7": "5491e7a4a95a32dd734f1afce3ca3a4b1985211e",
      "color.blue.blue-+8": "df6cddb7abb431dbd9ceb4cfbba108ac21f1d2b2",
      "color.cyan.cyan--4": "fb056a8681ec71d9bb426b6037065844d8a24570",
      "color.cyan.cyan--3": "3dc39a2a07d3fdefa4befe91d1c37dea759bfc43",
      "color.cyan.cyan--2": "5be6a661a7aee3d028ef1e83f396251e13362615",
      "color.cyan.cyan--1": "487030f7483b41258c0b965c88b54a56218c4956",
      "color.cyan.cyan-0": "7bf3b5ae28b76bc92ab954b97e4ff5cb4346ab23",
      "color.cyan.cyan-+1": "6bd86eb60696ad1aaf50ac3cc5a2909323b86010",
      "color.cyan.cyan-+2": "d95cbfed6fe4e775da6aba595e90daa4cf89e5fa",
      "color.cyan.cyan-+3": "c6a9efee0a1447251f178c75e47bc0d01829486b",
      "color.cyan.cyan-+4": "28bbb49b592724f4d1eaf775deca289367104376",
      "color.cyan.cyan-+5": "edd66ec5bdd9dd9a90e83935fa59f69491c855aa",
      "color.cyan.cyan-+6": "f451f7f1bac4e14bc8f65d1f2073c5438807fa79",
      "color.cyan.cyan-+7": "03ee48e67e5f7357ee932f1d2621c6da77f5c520",
      "color.cyan.cyan-+8": "6d4554154617589a20d9b89f5daa3890e06902a8",
      "color.teal.teal--4": "473df9b041ac7c3e2551c88c612ecdd3c9300ed9",
      "color.teal.teal--3": "dd051912973e490175fa2ee322698ebfadd2e39d",
      "color.teal.teal--2": "52b6f548431dd434bc4203fe785f05bccaffdf93",
      "color.teal.teal--1": "98bc53a822742c8a1c4557afcac25ee283d440ea",
      "color.teal.teal-0": "f32c6cf2eb77157e9bfae92d7dae02a0e230910d",
      "color.teal.teal-+1": "9220a951b6bbe239d0a6043c3fd0c141534e7095",
      "color.teal.teal-+2": "9d4f96e8ee46803c216c10e17173bf82eb7cfeac",
      "color.teal.teal-+3": "23bac8de8f44857fde181cc7c007e578edff2d3a",
      "color.teal.teal-+4": "99406cbb7aae3121dfa623e5a53673e5b8d55b56",
      "color.teal.teal-+5": "28fc110e4026466f6a996ec088a075188066dee4",
      "color.teal.teal-+6": "4298b8ee1f2b45c5b5c077c9c8743ec2c9ded49d",
      "color.teal.teal-+7": "183772ed6fcfe611281ff60679ad33342bd3fadf",
      "color.teal.teal-+8": "050116f07eab1c1602d2789e9f2c7b793efa2dc8",
      "color.aquamarine.aquamarine--4": "d20828d0d7c993572e73319b079f005d0fc5b4e3",
      "color.aquamarine.aquamarine--3": "265b5a0b110e6c94552721a28f919b41c142f9de",
      "color.aquamarine.aquamarine--2": "8e64ab8ea9298d06f41e3a9315c71380666039ae",
      "color.aquamarine.aquamarine--1": "53f78fd49a22e71a498bbb9f457f568075366b1c",
      "color.aquamarine.aquamarine-0": "b84b1d00db6b7dc6dd2672db8acbde6db6821bfe",
      "color.aquamarine.aquamarine-+1": "6bd2e772b1fbda336cc45c57e4d6ba45200e9c8e",
      "color.aquamarine.aquamarine-+2": "70e94047a4fd9813c3aca85110f9e0405af8c778",
      "color.aquamarine.aquamarine-+3": "b63787bdd514f806429a95ee18ca84d1c57474e9",
      "color.aquamarine.aquamarine-+4": "c5098dd19e2cdab4cd7e0a12cd3a15514969813f",
      "color.aquamarine.aquamarine-+5": "71268560ee32fd9156f81e1ca9bc68768eb5729b",
      "color.aquamarine.aquamarine-+6": "b1eee982bd7e7dceb5ca4a39258425546627df08",
      "color.aquamarine.aquamarine-+7": "dd729ab783e1ce80d7661af63bfeb0d4c456a27b",
      "color.aquamarine.aquamarine-+8": "ef36adb9e8c96a4e4586a8a681cb4cdfdd7664b7",
      "color.green.green--4": "a09da48222dad4225adb8972b8ba46e0ad520572",
      "color.green.green--3": "0f4609801ebe08ee5b342066f9c3e1cb2a03c20b",
      "color.green.green--2": "d8ca654ae21ebffc6362e8bdd1fda93dc3fc9a3c",
      "color.green.green--1": "40936296798ae49925e6a2830dc916c3a4b1dec4",
      "color.green.green-0": "0ca3f96950cb1baa5ca6c5a1924f0c0a92f8850b",
      "color.green.green-+1": "473af753ec787fdc70b7fb093f5a9affb7366368",
      "color.green.green-+2": "1e6fb7b45d46a393df972a213f85000e2b7e7ecf",
      "color.green.green-+3": "7d62887f53ca888865002e753eeddcceadf4973b",
      "color.green.green-+4": "6a12ddd8e11d09af9363fd958ac583307059e039",
      "color.green.green-+5": "5dc5e421d87b61c6858558b84fb2c7250978b1b3",
      "color.green.green-+6": "36cc0340e07d3b3122c12ee072275e8592388ea4",
      "color.green.green-+7": "31baa92cb94d4d0ad7b2404a210961ea2b4317c3",
      "color.green.green-+8": "6145cf4fdaa8b6880f7de6af425ac194b902e1c7",
      "color.orange.orange--4": "682551e5a8f2e90bdb1f3c7d1491f9df0177f74d",
      "color.orange.orange--3": "230dcc455b7b29bf25a0d7776bdf85ea502373fe",
      "color.orange.orange--2": "63f1912c0fe6f1a87a6ce66b4fbc688eff77733e",
      "color.orange.orange--1": "1abc383b4df14c8b1b6f15e56e59e2f34bbec105",
      "color.orange.orange-0": "7389690b7938290439143628b99c9e6633a43723",
      "color.orange.orange-+1": "43317532af2227e9a003dda3f3e46d237861e267",
      "color.orange.orange-+2": "6da9d1a5bcc55bc8daf09033d16a529ce4225412",
      "color.orange.orange-+3": "7b1d0d0b2ca120f2820e4a04b26f42a0b67db974",
      "color.orange.orange-+4": "0eaa7516390b60c1a537f9b5f56f9531814ff764",
      "color.orange.orange-+5": "c0ffa171358477d6acedff300c2daa586bd01ce8",
      "color.orange.orange-+6": "852e75619141f3939e527b08c79c5b6dc8ae6f83",
      "color.orange.orange-+7": "d1b2376a14b360b19be0e80d592a43ae2acb7b7d",
      "color.orange.orange-+8": "7baa76b72a2e9cc01a86e6d37a0aca57fc097ebc",
      "color.transparent.transparent": "82680e5897b31dfb80c81796832072a4c263ddce",
      "borderRadius.border-radius-0": "abc0e9b21c7eede838ed4c368baf3bbe21118d73",
      "borderRadius.border-radius-25": "4fa3993231766a98b6635f07cb57096a6961b405",
      "borderRadius.border-radius-50": "638489186c3aa6cd3ca82e1a05ccb943289e5a99",
      "borderRadius.border-radius-100": "360e6a0c6d13c886a95f6194edcd0fb042afd89a",
      "borderRadius.border-radius-150": "198b768b89b6dc892522c4b8a74d64b94bdc39ba",
      "borderRadius.border-radius-200": "2daa83a475eca5a766c6d57fac23842227b21d4c",
      "borderRadius.border-radius-250": "1a719de3adb83d1c03c3a27addf891a59271d082",
      "borderRadius.border-radius-300": "c462fc64f60934b6781d0a0d51f0911be143ad54",
      "borderRadius.border-radius-999": "9f46f282e7f2df0442cd680fa1f408b82aee53fc",
      "borderWidth.border-width-0": "9661602e4108e41e4ac926324c34c036693a1437",
      "borderWidth.border-width-100": "4d49037cbca1b4c8bf0c02e11e64fe94a57cba2a",
      "borderWidth.border-width-200": "83b5157030d4c3c1645976e2bf23e77d38ad895e",
      "borderWidth.border-width-400": "0ab41f8f2a7455e3ba09f8313135aa8f6c4d2874",
      "borderWidth.border-width-800": "c6182b9c148a3b8ebc18bed7d864bcd4277deae6",
      "dimension.dimension-0": "dbc69a7d870ff18ff3d104d382e99979599b6107",
      "dimension.dimension-25": "ae56c0e5bea9ef012cda4af3ba404036e4452213",
      "dimension.dimension-50": "3c8842ffd01402f7da2a1d7f4069e9c25058d059",
      "dimension.dimension-100": "4fb54bb59df24d55830efe5f3f48808256bd387c",
      "dimension.dimension-150": "b302e5fbdb9bb380113788447c5232de2b3e8c99",
      "dimension.dimension-200": "17b2eb3d5ec81ab0d6e0f5edd12605614b40b724",
      "dimension.dimension-250": "b0fc7b67094383b658668c12b7de9629db8cd560",
      "dimension.dimension-300": "e79a983039717d61c706a0f488ba508533508f2b",
      "dimension.dimension-400": "8327bbd27835f837147c3ad4a27f2106918a5ebd",
      "dimension.dimension-500": "a87679c7a9f9ca66a0ecc2593e80247cfbc6c8f3",
      "dimension.dimension-550": "0e772aa52e926e8d93ed594a0a922e775f5197cf",
      "dimension.dimension-600": "aeee9b696b714f68bbbaceed4de1932b7f02d432",
      "dimension.dimension-700": "c8756ce3b18948de22fda6643aac285cbd60d22c",
      "dimension.dimension-800": "aab37691f0d0feeca71902aacde088d325473edf",
      "dimension.dimension-900": "fe1bea243ca37198968054fce46683304ecebbc3",
      "dimension.dimension-1000": "162560bf6c7bd0f50e798449f2aca4a689792694",
      "dimension.dimension-1200": "587af80976268608d35b3f59fad1d687ffd42f02",
      "dimension.dimension-1500": "748d251fe4f7539bfbc11cf8823b8b08054b66f9",
      "dimension.dimension-1600": "1275a039c5a4136b4a70225ff951134e70034255"
    },
    "type": "other",
    "value": "[object Object]"
  },
  "Default Theme": {
    "id": "4c44dd4fbff7d063ca69476e476ba47f5ba4b271",
    "$figmaStyleReferences": {},
    "selectedTokenSets": {
      "global": "source",
      "alias": "enabled"
    },
    "group": "Alias",
    "$figmaCollectionId": "VariableCollectionId:15:2831",
    "$figmaModeId": "15:10",
    "$figmaVariableReferences": {
      "color.semantic.brand.semantic-brand--4": "796f6d5f70eed67c90439ea15739b02764523a8e",
      "color.semantic.brand.semantic-brand--3": "8afd27aed67317063390d722d0ff9cc2a23d9f4a",
      "color.semantic.brand.semantic-brand--2": "1c1af1452dff45c7fdda67674bd36be4f6044837",
      "color.semantic.brand.semantic-brand--1": "f50878d12d8d6244402e3a8dbee47790802e6a3a",
      "color.semantic.brand.semantic-brand-0": "a68b1a9533c88cadc397761e08dbfe8093c7724c",
      "color.semantic.brand.semantic-brand-+1": "1e842d79546ed8a3cf815d0459bf2756287ec4db",
      "color.semantic.brand.semantic-brand-+2": "e1780694f0a5b77a2afba4c359cd482a1e04b3e3",
      "color.semantic.brand.semantic-brand-+3": "075e2b076bbed4eeb330c1bed1706072378e9201",
      "color.semantic.brand.semantic-brand-+4": "77346786802a18cf287ca487e64a92eb56be655f",
      "color.semantic.brand.semantic-brand-+5": "d2a374bf0faef47a2ed575242d25e0be6f0be7d8",
      "color.semantic.brand.semantic-brand-+6": "6e30373416af81b444fb50c9ddf9058b2257305b",
      "color.semantic.brand.semantic-brand-+7": "5e5fc91ed8f3bc640e39313728400f65443e914c",
      "color.semantic.brand.semantic-brand-+8": "f0958fcbf87556137d290e3613f2c0d8f779975e",
      "color.semantic.neutral.semantic-neutral--4": "013b1abd52024b20a4cb50acb39d70a2c707002f",
      "color.semantic.neutral.semantic-neutral--3": "ed6f416fb945da92f0db90b05b63dfc9eba781f7",
      "color.semantic.neutral.semantic-neutral--2": "9bb6daeb3c85e8dc5d28cd9571132c1d92cfefa9",
      "color.semantic.neutral.semantic-neutral--1": "8e9f2f13d8a8fbd9559f03026c5981ab052849fb",
      "color.semantic.neutral.semantic-neutral-0": "128059d4e6b4c6bbe78b57e15ca2395d790000f6",
      "color.semantic.neutral.semantic-neutral-+1": "92198414abeb1584ca22f59af7cf6463c6771c5b",
      "color.semantic.neutral.semantic-neutral-+2": "cd0717d4a5ea224fa793378af5701c524d47c427",
      "color.semantic.neutral.semantic-neutral-+3": "3ded53ebc0c606b65444e0b0501e9964b166cd48",
      "color.semantic.neutral.semantic-neutral-+4": "5600bffbe92764c62fcc37f8e62b707329bc5f5d",
      "color.semantic.neutral.semantic-neutral-+5": "c3094becaa3e6b1c94359db734bc057c571b1d1d",
      "color.semantic.neutral.semantic-neutral-+6": "3cb9ac9f25b8694a000e6f342a9e79ead268b1de",
      "color.semantic.neutral.semantic-neutral-+7": "d56f354de1a871e08b80b9dc5544f5370d507ac0",
      "color.semantic.neutral.semantic-neutral-+8": "dd297cf833bbbbe480548660593f90b20950754e",
      "color.semantic.neutralAlpha.semantic-neutralA--4": "9e0e3f77535c3e752b6138615075f7a60b606260",
      "color.semantic.neutralAlpha.semantic-neutralA--3": "f6e0f4f2758d816b1e4741385eb3eab7404a5ce5",
      "color.semantic.neutralAlpha.semantic-neutralA--2": "df080c815676ef2fffd352ea9f5cb2bfc654be4c",
      "color.semantic.neutralAlpha.semantic-neutralA--1": "4d57b2548d0efc9dec07b8b66d8099f59897481a",
      "color.semantic.neutralAlpha.semantic-neutralA-0": "5f7823576ef45a6ec636eccfa5746219a72068dc",
      "color.semantic.neutralAlpha.semantic-neutralA-+1": "cfaefd4b37449d6f2dfd6924702da100037995c2",
      "color.semantic.neutralAlpha.semantic-neutralA-+2": "8a6d1d8ba3d4e38033d07434eafec970663dced1",
      "color.semantic.neutralAlpha.semantic-neutralA-+3": "70a08fea9274e2ebfac35e584e9631b22a2630d3",
      "color.semantic.neutralAlpha.semantic-neutralA-+4": "c66215ae8f4036cbdcd54256b053c23bce97fb58",
      "color.semantic.neutralAlpha.semantic-neutralA-+5": "dea6ae4a920c0404e735ae141228a5c1eaebda8c",
      "color.semantic.neutralAlpha.semantic-neutralA-+6": "c28082035212c4d85c9643782d48eebfda81a8ff",
      "color.semantic.neutralAlpha.semantic-neutralA-+7": "76f823b371715ae04efef2925b7d7c58ec87f2e8",
      "color.semantic.neutralAlpha.semantic-neutralA-+8": "909c5f4b0f7b11f03263224d714529e8d55d6bf2",
      "color.semantic.info.semantic-info--4": "e3447eb1b61f69691f6a0b736bbe397c36ce5cf0",
      "color.semantic.info.semantic-info--3": "181ffe7ee78c2d0cece6d9eb38941c9aedb35728",
      "color.semantic.info.semantic-info--2": "db91907d3855d8879a068040ee96b621f0feda7b",
      "color.semantic.info.semantic-info--1": "47fb206be50508877215e00e60d2b173c8ac65d7",
      "color.semantic.info.semantic-info-0": "26dfc877af1478663b48ade750e35de319cd57df",
      "color.semantic.info.semantic-info-+1": "36bacc3db06ffc2932922eafee72210e0789c926",
      "color.semantic.info.semantic-info-+2": "f60af898cb4713465c7520f4c0182dddfb1f44e5",
      "color.semantic.info.semantic-info-+3": "52913175abb18a6a69003d248ec9c5fc0396cca0",
      "color.semantic.info.semantic-info-+4": "0edecb74a1fe8da9f5a7c2352a6af25d02251be8",
      "color.semantic.info.semantic-info-+5": "ba1eb1744ea48bd253fa85f84cebbf3a90840a73",
      "color.semantic.info.semantic-info-+6": "5f13262857e4181242a4b1dbb63095f73a9212fa",
      "color.semantic.info.semantic-info-+7": "966eb6ff77cf7a366e3b6605571214c4250f1e01",
      "color.semantic.info.semantic-info-+8": "a33d40d821e8d8ca948114d4afded55cb763726f",
      "color.semantic.success.semantic-success--4": "47cf56943ddf79300a39d3525d6542e4e9b2adfd",
      "color.semantic.success.semantic-success--3": "940a88d8d0ea51f77acb4bcbc5188c01b5422dd8",
      "color.semantic.success.semantic-success--2": "c2056509779f68de526a4828f489082f8b8b6644",
      "color.semantic.success.semantic-success--1": "99d56f44ae71a0f127d4ee8109ec65e7697ec9ce",
      "color.semantic.success.semantic-success-0": "b84b21301717b0990100d0e01895da8784d82019",
      "color.semantic.success.semantic-success-+1": "766056ee71b08bafbdfe3d62946753697b3d441e",
      "color.semantic.success.semantic-success-+2": "c2af47e15fa4b4c566cdc4b4621d452c789c96da",
      "color.semantic.success.semantic-success-+3": "db14d394578890049a7743118c2ffa13a71db855",
      "color.semantic.success.semantic-success-+4": "296c7a53a4afc7bab77a7980efddf0f31e18325f",
      "color.semantic.success.semantic-success-+5": "7bbbe3c98870ff7bcb8f13e92a9bb63c0f684ea3",
      "color.semantic.success.semantic-success-+6": "f2a67e2956e25ffdf8bfb134cde2230dec75b248",
      "color.semantic.success.semantic-success-+7": "b20419158c03522edb4736df462ec9030378c0d1",
      "color.semantic.success.semantic-success-+8": "aa1ee3e8652438a8f7e1562abda6e77f253d5826",
      "color.semantic.warning.semantic-warning--4": "b5f5ab0bcd8434e3045efced0068e279ced85029",
      "color.semantic.warning.semantic-warning--3": "a1c8d0e42aad58e80f2a2d9f49e80eb78883f660",
      "color.semantic.warning.semantic-warning--2": "3b8ec42bc4e3b5d9dbe8fb2eb72c58f1786893ce",
      "color.semantic.warning.semantic-warning--1": "81030fa6cc7e494e24d6c7f8712a92bf597223e6",
      "color.semantic.warning.semantic-warning-0": "4079c638f0fc74c7292ef2238b5d21bf1d1f86e6",
      "color.semantic.warning.semantic-warning-+1": "453f4005f072ad2247a2dd2acd41490bd37e18ea",
      "color.semantic.warning.semantic-warning-+2": "3142fce704c1e46188618aa4f15744148d30cdf1",
      "color.semantic.warning.semantic-warning-+3": "01bbc9444bedddb14e1a19e06e1f4207a4ea7818",
      "color.semantic.warning.semantic-warning-+4": "8564aeef7000edf5f9ea78d49e72b5ef57b4d6be",
      "color.semantic.warning.semantic-warning-+5": "6e37f793dd172545823c68ddf52b4ff8643d9f32",
      "color.semantic.warning.semantic-warning-+6": "e0bd6434d324886395938b261997d648f017c59a",
      "color.semantic.warning.semantic-warning-+7": "ab8456c35b1e05b6ca911cb6aa63f27dba00268d",
      "color.semantic.warning.semantic-warning-+8": "490d807fd56f45e11286d2575a154a656084a251",
      "color.semantic.danger.semantic-danger--4": "8f65f0dde7e773f80f462211f50e9219d5c4085b",
      "color.semantic.danger.semantic-danger--3": "8ed96e0db76a630e3d03170b243b5983706efc81",
      "color.semantic.danger.semantic-danger--2": "8c28309f9382f38904319ed6e3201f54ae5e3047",
      "color.semantic.danger.semantic-danger--1": "bd475efd75dfd9c05d0959adf34bd28b0dc4630c",
      "color.semantic.danger.semantic-danger-0": "a450b416c3939dfacbd5525c3185e43281fb3ab6",
      "color.semantic.danger.semantic-danger-+1": "91e87eafbd670ede351ff34ddcb8fc66feb30e30",
      "color.semantic.danger.semantic-danger-+2": "7732605597d91b95e19e9272a2eaeab6392db9c9",
      "color.semantic.danger.semantic-danger-+3": "621b0ed0e1e9ec03cc0bb57cfd38f0584d227657",
      "color.semantic.danger.semantic-danger-+4": "43c013eb885ac5bdac0819c31673f006853560c7",
      "color.semantic.danger.semantic-danger-+5": "d36ceb5bab85d18bd07906cd3485e4754917f176",
      "color.semantic.danger.semantic-danger-+6": "3d41e032bb56f756f0c03a50d5b91bad0d755e8d",
      "color.semantic.danger.semantic-danger-+7": "4e3a1070de12e2dabdfcb7260d85530938bdf630",
      "color.semantic.danger.semantic-danger-+8": "3c37cdadf3b44e8906e01f143a556812bdd9c837",
      "borderRadius.border-radius-none": "2266f16aecd7efa01c8ee16b338f85e05615492c",
      "borderRadius.border-radius-sm": "fa7ca285246ed87cd3168dea30fca7b8425f664e",
      "borderRadius.border-radius-md": "a28eda2bee39e0ea68a513a5511fc29901a4ac4c",
      "borderRadius.border-radius-lg": "1e9809b0a06b14d13a8c22f0806c2ad3f20e9591",
      "borderRadius.border-radius-xl": "8d32b8e41326d4427fc5125cc99499ea5b1e5de3",
      "borderRadius.border-radius-2xl": "a6a70a923736ceb518a4db03b39489a1ac5874e4",
      "borderRadius.border-radius-3xl": "30888daa9e6f88d1093583e843a5d455cac877fb",
      "borderRadius.border-radius-4xl": "c767b44c738836160d5a805ac220d4223a27048b",
      "borderRadius.border-radius-full": "576733185dc374eb3eb96e1c41232d3ab716e5f9",
      "borderWidth.border-width-none": "38a97f0309dffbafc704ff56ae4e794cc4af231c",
      "borderWidth.border-width-sm": "059f676c225b741b46a9665df9240f22baff5de2",
      "borderWidth.border-width-md": "1cc3b615a794a6eb18a55574cc158e428370c58a",
      "borderWidth.border-width-lg": "73a4caa36e7cada50b7ada2b079967a07adedc07",
      "borderWidth.border-width-xl": "2bfa27b97a069d63d5e04f47ef30c59b39ae8412",
      "size.size-3xl": "989945f255ff4f1e68642f6f0a5ec7a4a79edb0a",
      "size.size-2xl": "d002e47cf4bc0b541b5521b8e5603eef36dc5183",
      "size.size-xl": "e4bb13172dfb6c515ba5d5fd2744d6865bda637c",
      "size.size-lg": "0bd077d2718e2f85d00ffe17d978c2237753df6f",
      "size.size-md": "782edca25e477ce8ea4e98c371e00d21d1c58909",
      "size.size-sm": "2c86048ac0a4082df672529ca73077e424a466c3",
      "size.size-xs": "dd9687c5072174c1aef3bb69bf13ce2676e75814",
      "size.size-2xs": "fe0a54dbcc780cd23a1cc739d8efcd9b9a80186b",
      "size.size-3xs": "146bcc08cd07106c267363eea3078e6c8fedc98a",
      "space.padding.padding-none": "ecfa381860856a996df7078017854e0f6acaba2d",
      "space.padding.padding-2xs": "1b991c6e287afcbf90a186b7e6448d9fe8ee13eb",
      "space.padding.padding-xs": "5046429c7bd6305e37804aaabafd03f2cb4881de",
      "space.padding.padding-sm": "96120735705f6bdf4b43a6795ac6ff8b94627eca",
      "space.padding.padding-md": "da3ccec9c526c6dcb0a9dec93920cd66b293f4e1",
      "space.padding.padding-lg": "4a707c39703b9adfe01880bd7fd852ee000348b3",
      "space.padding.padding-2xl": "3eb04ce5c461849cb9455bcec5850d7e91575b00",
      "space.padding.padding-3xl": "8084694b3177a1650851ad4c4e177c979b0e7da6",
      "space.padding.padding-4xl": "cda8f0bb349c4876645169da1a8f329152edd0c2",
      "space.padding.padding-5xl": "c36cd76ac525097096a92a6a76b2ae0c13e57ed6",
      "space.padding.padding-6xl": "5dde65a4871f910120d798f572945a1e112f9eb1",
      "space.gap.gap-none": "4f9678b996a2358ebe29185af1a65eeac43517ea",
      "space.gap.gap-2xs": "65e0a8901f811ee74845a7c03e703329a3f35a2b",
      "space.gap.gap-xs": "330907dd25211f595b4c770aa84b6857dcca3041",
      "space.gap.gap-sm": "f513ee21b182ef5811363af3234329b53b32c6d0",
      "space.gap.gap-md": "2b955cc13d2ba52da468b1e98676d2eadc56ce93",
      "space.gap.gap-lg": "6f8c29ad0b8ac5c0c39e58e08c8022905cb016a9",
      "space.gap.gap-xl": "169360f1f6510bfb4b94f2b96dfb303c1c0f1a0c",
      "space.gap.gap-2xl": "7ee12a13700da84a46e85ec9305d6e6c9d3c4327",
      "space.gap.gap-3xl": "38c90bdb5050c1f4f01b8d4f9bf5a748227c5879"
    },
    "type": "other",
    "value": "[object Object]"
  },
  "Light": {
    "id": "e03a0a15350807558a3e7849f9d4f0d035ce1d4d",
    "$figmaStyleReferences": {},
    "selectedTokenSets": {
      "global": "source",
      "alias": "source",
      "component/light": "enabled"
    },
    "group": "Component",
    "$figmaCollectionId": "VariableCollectionId:15:2966",
    "$figmaModeId": "15:11",
    "$figmaVariableReferences": {
      "color.content.content-primary": "588bb1a1a38d7691ab8d6e22c7b09f55b73b4ed2",
      "color.content.content-secondary": "406f47621f204e8fe3d3ef2fb6c20a9b6dbac065",
      "color.content.content-tertiary": "4036a5391164ba0dad912e619d770bc3842bf6c7",
      "color.content.content-disabled": "8a0c8f80c24e88366fda1a4c800b73cacc4c04b9",
      "color.content.content-primary-inverse": "60527cdcd62c0a8525286dc323ca7fa6f2367278",
      "color.content.content-secondary-inverse": "34478916da8fa840618dd1e1d0b19bab4278102f",
      "color.content.content-tertiary-inverse": "a1dcc8780beb9e2332ecefbc73fc37193809ed90",
      "color.content.content-disabled-inverse": "449b9aeb3aaa279cccdcaf7856c2231aadd8d2ee",
      "color.content.content-info-primary": "bd91949e9ccfd444e5442130f37d51ebe632adc8",
      "color.content.content-info-secondary": "f285d3eeeda231b43a1f09811c005df120eb7252",
      "color.content.content-success-primary": "bf75a0072763529fc4fe2fcda441274ae2271973",
      "color.content.content-success-secondary": "ec94bb90dcbca17d1122741385623ebbb53beb74",
      "color.content.content-warning-primary": "6cc5392cf551c5696fb1bf528b7c82528b2318d3",
      "color.content.content-warning-secondary": "314938707470fd3cc2a79aad2f87f00f7d7cd4ca",
      "color.content.content-danger-primary": "641ae880bfe3dbcee8939949d996a8454c233bbb",
      "color.content.content-danger-secondary": "a2f4c098b19c888173684440374a0cf4d25767b9",
      "color.content.content-brand-primary": "5f7d523155a915a0f7ec969fa4c4efb01d640bdf",
      "color.content.content-brand-secondary": "8bb9c578f9e3c76772621a324998f5d60475df9e",
      "color.border.border-default": "d2d05be092a753b2c889e7dfb47b5f3e205655ce",
      "color.border.border-defaultA": "3152515025c34401579040ecf6f562345c1a9e3c",
      "color.border.border-inverse": "79811c3353d1f6d348bfcb17462fb8969f0328c3",
      "color.border.border-neutral-strong": "5ed1c3a529b2534183e8161061ce319af3564ed5",
      "color.border.border-neutral-subtle": "45d9f5ba653042494392aed271734a6e1ad0f104",
      "color.border.border-info-strong": "747f796a73252e4c7d1c82ba34b8c1c752db303d",
      "color.border.border-info-subtle": "ac911dc6f96557648b1b7dc74a2486ce5026d03e",
      "color.border.border-success-strong": "814fc8dcb0547932b402b6e0dd07f59dd29e1d3c",
      "color.border.border-success-subtle": "ad92536e1bdd06f68bf6ff05efb09ee7a7f76c80",
      "color.border.border-warning-strong": "7ad3235f8985462aa29e326110ddde530687fad7",
      "color.border.border-warning-subtle": "e80a3e945391f920809453b38126b25982ba0653",
      "color.border.border-danger-strong": "f897981f378c2bc162dbf0408f0d431a0af252eb",
      "color.border.border-danger-subtle": "01f1588af7f9f272a1f0a07f44a833b2f43ab779",
      "color.background.background-default": "363be3d920a7e4c376577c892974a4c0abfe64c5",
      "color.background.background-inverse": "6420dbeeb9f76a83e2a4dde4d4c7f06664c889eb",
      "color.background.background-neutral-strong": "1ebb001fdd7f167df306e70595ff350fa1af0434",
      "color.background.background-neutral-muted": "5d09b218b88e918b2c87befbc63ce7632bd0c42d",
      "color.background.background-neutral-onSubtle": "3fcec4ff4c051147b7a56ba0f5012ec3958f43e5",
      "color.background.background-neutral-subtle": "e4857e5a01a7120347c41831d1227e06d6a6de03",
      "color.background.background-neutral-surface": "0d6d23e0b11b00f09285d37209b082045dbcc8d3",
      "color.background.background-info-strong": "47a2a4126bffddde752c4012d5b905593e0c6ac4",
      "color.background.background-info-muted": "739d9526458f500ff2c15deb891a5b922a07081a",
      "color.background.background-info-onSubtle": "2c931f51d5ce50ca79b0efd183f534db42fa6fae",
      "color.background.background-info-subtle": "a81491f255b9405d640ef915f8c20809c0c0613a",
      "color.background.background-info-surface": "11e90febfad6a796c4792357c215d257df367710",
      "color.background.background-success-strong": "aff4995a2951fe430758cda342adde5384d04bdd",
      "color.background.background-success-muted": "a8771222dc99961225c9c0bf3640790dc706f628",
      "color.background.background-success-onSubtle": "776bbc0663efb404355ffc7b9a465e6ae6fabfb9",
      "color.background.background-success-subtle": "c7f923458409b26269feea484b8b1df3556fd66b",
      "color.background.background-success-surface": "d309351e093dd6d594d381dd65b96d86b2b14182",
      "color.background.background-warning-strong": "61314f93ffb73864eeb4b8460605dd4cc5c73b19",
      "color.background.background-warning-muted": "ac5ee29a7f7b2d461ba47927b5d513fa07b9efdb",
      "color.background.background-warning-onSubtle": "bd96864f6a1bc9ea64ead9d00478e0878d91669f",
      "color.background.background-warning-subtle": "c46692b18fde84a4729d095941a8db76f0442898",
      "color.background.background-warning-surface": "c5355716314a10a3ae122e8ff5e363fec2efb359",
      "color.background.background-danger-strong": "e7b3c926e36f2db615a676d1b678225529f30dea",
      "color.background.background-danger-muted": "bdae80d77d41b0ec8d1f5b3d44a6c8125e37069d",
      "color.background.background-danger-onSubtle": "0ea41835af76c4e850632e3c2e552277bb1a0a01",
      "color.background.background-danger-subtle": "0e7f954741afe1761382f5b609532c96b09e07cb",
      "color.background.background-danger-surface": "8540ff9e1317d378d5d140c79495011148095f90",
      "color.background.background-brand-strong": "5eab0e32a51576fbf1dedf376a8a1d4e382c6dfb",
      "color.background.background-brand-muted": "d53c72c1deb1285d4a5272632fac2481e91a7174",
      "color.background.background-brand-onSubtle": "8271c7c1f18ab458d7cd576a68b360d17a10ae7d",
      "color.background.background-brand-surface": "d0a6e01a33eb848bd30a2aef6b9da8205637cf07",
      "color.background.background-brand-subtle": "6b92410feb9d5deb805ae4fb531bd8a2fa4233f6",
      "color.action.primary.action-primary-normal": "55715683cfe6ba54ff2c4b2c3f1e76cf910a5764",
      "color.action.primary.action-primary-hover": "aba94928373e64c65066474405b184955e80ba2e",
      "color.action.primary.action-primary-active": "115d4ca5f133cf0635dcd2b721ed7422ed68d576",
      "color.action.primary.action-primary-selected": "8506dab154236cb3b9ddec9db59fdda751a0bfa3",
      "color.action.primary.action-primary-subtle-normal": "04bbf297c4dd23276ab8227807aaa27219db5adb",
      "color.action.primary.action-primary-subtle-hover": "d9f879f8685f806d62fb79dd3e063e4ff3ce0cb7",
      "color.action.primary.action-primary-subtle-active": "86043f114695a352bef4a58da003e5482ae729b0",
      "color.action.primary.action-primary-subtle-selected": "6b80521ec2581061b7eeeb728fe758c053e92168",
      "color.action.neutral.action-neutral-normal": "3d88999013a77966ae77afb977bed740053713df",
      "color.action.neutral.action-neutral-hover": "1e792c5c4cafb931b1c88357f258d364bebaa1fc",
      "color.action.neutral.action-neutral-active": "4c8a388072572f9af777dfd8daaabe8c2a7d1414",
      "color.action.neutral.action-neutral-selected": "66bb30a37079a4db18ff9ca4bedb941f21da77a3",
      "color.action.neutral.action-neutral-subtle-normal": "7c58692aea3efb7e04bc116cf56775bc226585cb",
      "color.action.neutral.action-neutral-subtle-hover": "4d24147915a3adfe4f092e91e8118f330a6e3044",
      "color.action.neutral.action-neutral-subtle-active": "5347ca2cb2a2f9d5a8b05685b4575c867488a933",
      "color.action.neutral.action-neutral-subtle-selected": "8a5e497680ddc90c15c00c3f0417be4a697d0d51",
      "color.action.success.action-success-normal": "4035b24b1a812b68a46a546757278c8a8ce82dbc",
      "color.action.success.action-success-hover": "2c3f0904ddae96c6de84becaa926563b10bd6e76",
      "color.action.success.action-success-active": "28a5892a4e698da0e15e3a8576ecf10c19b8503b",
      "color.action.success.action-success-selected": "4e77df534b1f0d62ea7e074216a208b7b9fd872d",
      "color.action.success.action-success-subtle-normal": "d26707037d3573db8cd6abd53d913f37fa6ea11c",
      "color.action.success.action-success-subtle-hover": "8c029ac08a43dd8d2c2b340b9c27c0401277f051",
      "color.action.success.action-success-subtle-active": "f4ad60c8e1eabfc5afd346d2d2a79f8df86e6acf",
      "color.action.success.action-success-subtle-selected": "4054238da2bf4a8bdb41c7aefb1baa01b7c3c70f",
      "color.action.danger.action-danger-normal": "6eb7d7949e26a4c1203cc99a773050608d320409",
      "color.action.danger.action-danger-hover": "6f6e9cf7a3c00ddd02eb9c324ef926227bbcbfce",
      "color.action.danger.action-danger-active": "02f73a989e66000a8d5c81bdc51b76876800e283",
      "color.action.danger.action-danger-selected": "cc2c28f3be99ef8e9180c7b371cae25717f6d6c1",
      "color.action.danger.action-danger-subtle-normal": "c74fb58d55ac7e1eb0fa1a253fd846464c119c12",
      "color.action.danger.action-danger-subtle-hover": "ce6a7de79b5098bba3b4e137548048aa437547af",
      "color.action.danger.action-danger-subtle-active": "5a3298e45e70ddcf184e8d379dd34c7ed93290e8",
      "color.action.danger.action-danger-subtle-selected": "143254d9d9e5f2a5ffa3a2451f57d8f47bc9fa65",
      "color.action.ghost.action-ghost-normal": "ad244e8b31e638fb97fb3b4b2b799999abaa2ba7",
      "color.action.ghost.action-ghost-hover": "78f6eecae28ce5fa5af3e256e3a54aee3deb9d48",
      "color.action.ghost.action-ghost-active": "20d11ec427f20df1dbc15046f9561f1a59c3939a",
      "color.action.ghost.action-ghost-selected": "32e02747a0cc28fe3d3b4b2eaf511a9836b1e04e",
      "color.action.ghost.action-ghost-inverse-hover": "83e760c59a4439629243bebbed59f04e223da8a0",
      "color.action.ghost.action-ghost-inverse-active": "db395dd80cb03245d1a7d3ec6d314ad166ba1a09",
      "color.action.ghost.action-ghost-inverse-selected": "7987061bcc85fedb8c7a46a73bbc931e62575e27",
      "color.action.ghost.action-ghost-danger-hover": "11013d32fbd86922dae475a3def3bfd5805e4131",
      "color.action.ghost.action-ghost-danger-active": "3b0c518efb631a007c10f986e8bf8e8727dd8dc0",
      "color.action.ghost.action-ghost-danger-selected": "45ecd9bc713512182c5962fd6620392c0e271d5a",
      "color.action.outline.action-outline-normal": "279d4e057502e36476fb57b1baa9105ec29ea61a",
      "color.action.outline.action-outline-hover": "25768934ccfed19f9a070a44d1df2beabd775395",
      "color.action.outline.action-outline-active": "d3a6a3ada55d60f44bc0df79afe29f2878282d25",
      "color.action.outline.action-outline-selected": "df4306438c64567118c29927718a78dac08ee47f",
      "color.action.inverse.action-inverse-normal": "c982c799e3ee364c882d80414e2bbe5c2062438f",
      "color.action.inverse.action-inverse-hover": "aed0bf06144a438e38c71b237c6a75ef1f9cd261",
      "color.action.inverse.action-inverse-active": "49b70a5bce07d752ead9b5da8e426d8364e5bfeb",
      "color.action.inverse.action-inverse-selected": "02141600494008950c6a269f43f9543a3108ea23",
      "color.action.reverseInverse.action-reverseInverse-normal": "a88b33e4cd5b9b97c9ad094fd727020c952d4d62",
      "color.action.reverseInverse.action-reverseInverse-hover": "b6492e723e2d5ef68fbcdb2d97fc8683ade4db49",
      "color.action.reverseInverse.action-reverseInverse-active": "aa49dde4eaa9917746427667d0f253e5509eabd0",
      "color.action.reverseInverse.action-reverseInverse-selected": "e6e2510fc4846595fb5b28c406edc9bec8d58d8e",
      "color.interaction.default.interaction-default-normal": "f434d0849fa7bea3960f0a5f77eed5ad0a530a01",
      "color.interaction.default.interaction-default-hover": "0115c2e168ad1e62e5320dcdb15602aad34bcd1a",
      "color.interaction.default.interaction-default-active": "632afae437e1f24c04633c290fbe6696a47009b9",
      "color.interaction.default.interaction-default-selected": "11701ed526eea476c93c28ccfb4b120f2b99be1f",
      "color.interaction.default.interaction-default-subtle-normal": "4954d2b4c998ebc884823eafa5c7cf009476123e",
      "color.interaction.default.interaction-default-subtle-hover": "1b52bc256f30e8d06593c78c18af88ef4097620e",
      "color.interaction.default.interaction-default-subtle-active": "b9a5cde8cd805f911a3523d4cac39c749d2c878e",
      "color.interaction.default.interaction-default-subtle-selected": "cdf9b89c6072e32f3f585be6f4b48d2ccfb209a8",
      "color.interaction.neutral.interaction-neutral-normal": "971fa1808b32cd1226dd857716cd8f380faaa6dd",
      "color.interaction.neutral.interaction-neutral-hover": "1cd36913150376da26dfd1357bcde1c21afa8eac",
      "color.interaction.neutral.interaction-neutral-active": "02bb7968fe02d8f1954bc81d60346f61ba3e19d6",
      "color.interaction.neutral.interaction-neutral-selected": "550cc8a01df9aa996cf93215eb422992f588ca5e",
      "color.interaction.neutral.interaction-neutral-subtle-normal": "491fd7f0041b230b3e10defddc2b257614427dac",
      "color.interaction.neutral.interaction-neutral-subtle-hover": "ea05debf52dcf3f0c1f631d984a1a0ad6afebb2c",
      "color.interaction.neutral.interaction-neutral-subtle-active": "bf19e65bcc8e8c350d8d33aa9f24917928462261",
      "color.interaction.neutral.interaction-neutral-subtle-selected": "08b5d1d8772378f852e535f2cb3534535b670115",
      "color.interaction.danger.interaction-danger-normal": "2c87ca6bf91d50a9fb1367f6b7ee7347439c3ee5",
      "color.interaction.danger.interaction-danger-hover": "7ac2ed09178a55cd80fc3f192c17f73ca752051a",
      "color.interaction.danger.interaction-danger-active": "8d1b7a277ccea935e75030b4bd1182ff25a8cbe1",
      "color.interaction.danger.interaction-danger-selected": "8c242b5d6706007f64a9c2b2fc6347cc89955c6d",
      "color.interaction.danger.interaction-danger-subtle-normal": "756ba62476fce64637f8439f8f3ddeb513b3e3c1",
      "color.interaction.danger.interaction-danger-subtle-hover": "d009c3842d8878f137cc7899d4f53125bb3f435c",
      "color.interaction.danger.interaction-danger-subtle-active": "d7f92a3725910c3c7b3d1b594395fbe612a32809",
      "color.interaction.danger.interaction-danger-subtle-selected": "7ae8c4fefd0fc3cd7600c103967d8d40f1ad545e",
      "color.interaction.ghost.interaction-ghost-normal": "0396c4559c669b4444ade8bae40f8477abb68c39",
      "color.interaction.ghost.interaction-ghost-hover": "a8e953b7b36826bf330aa886fa0f9e236bac2db4",
      "color.interaction.ghost.interaction-ghost-active": "406c95bb948d768bf4a080d05075e0d2f3ad476d",
      "color.interaction.ghost.interaction-ghost-selected": "4fc7dd02ca06345237417be5dee009835a1d5166",
      "color.interaction.ghost.interaction-ghost-inverse-hover": "9168529a95381fe910bedd69f9c51574478e4f83",
      "color.interaction.ghost.interaction-ghost-inverse-normal": "4e463f2045999204ca254cf2c5c8edc0dfc61235",
      "color.interaction.ghost.interaction-ghost-inverse-selected": "09e5553cfa8b081adc0a8345cbd0582665f7a5d2",
      "color.interaction.ghost.interaction-ghost-danger-hover": "f2016889f7ea200b4a9877a749871bbb3b20d05d",
      "color.interaction.ghost.interaction-ghost-danger-normal": "d4571d9760c679cad8c2c9d871537706b7b1a24f",
      "color.interaction.ghost.interaction-ghost-danger-selected": "d33a0d4878e1b2f9dc6cfdcf0a0a9d79c84b47b9",
      "color.interaction.disabled.interaction-disabled-normal": "3178fff17097a05058aea714094144f6bebd0db2",
      "color.interaction.disabled.interaction-disabled-hover": "096171412d8cfea6449216d35ee9cfba5ec9fc3e",
      "color.interaction.disabled.interaction-disabled-active": "a31d9723219f5e009e77c517b41117bbfb1923ad",
      "color.interaction.disabled.interaction-disabled-subtle-normal": "418b8c6d1cfaec19095fa5978ef019d9f6eb575b",
      "color.interaction.disabled.interaction-disabled-subtle-hover": "e83ebfb444280f574c6a386007db57fb249aea1c",
      "color.interaction.disabled.interaction-disabled-subtle-active": "0bf8b4e7ede3361c55fffd3db2d89a52ff7b6f7a",
      "color.interaction.border.interaction-border-normal": "2560e2abc14d0abe3e44a61317f56172760a40d9",
      "color.interaction.border.interaction-border-hover": "89c14f3adeb386231ca53dbcd2e8140c1d9352a4",
      "color.interaction.border.interaction-border-active": "67354bfd0978dd3985a13722b169cf3d8cbff994",
      "color.interaction.border.interaction-border-selected": "fe47de6ab22d98e22ec5e4b267b50cedbf0d57dd",
      "color.interaction.border.interaction-border-neutral-normal": "5c7a0ada16d5aaec1251d432d417ddcabf91478f",
      "color.interaction.border.interaction-border-neutral-hover": "06126a4665a9dace158f180a6aa3685753852f6e",
      "color.interaction.border.interaction-border-neutral-active": "454e3b69747ecef91f6838a350526a3760cc1096",
      "color.interaction.border.interaction-border-neutral-selected": "2a9206af19f0931a587885df92d1e627cd3425b5",
      "color.interaction.border.interaction-border-danger": "13d212359683484f66618ae103a1b940d5eefebb",
      "color.interaction.background.interaction-background-modal": "ecc18c7acbc8c8301db1593d6f1dfc47d5046d59",
      "color.interaction.background.interaction-background-modeless": "538652bf4f3a8550c51c57bb65bd4c74ccaabdd9",
      "color.interaction.background.interaction-background-modeless-inverse": "e146cec78f2538039b8d43624f0d613dca80b304",
      "color.interaction.background.interaction-background-sidepanel": "173507b20dc9568e0b11c379748b200a4da9ab1d",
      "color.interaction.background.interaction-background-formField": "f1ae9276578f81a06816a034ad5328e54908c317",
      "color.interaction.background.interaction-background-dimmer": "6063a96ca376a4f251905bb8569e5b0dc0271bdb",
      "color.interaction.inverse.interaction-inverse-normal": "cbe8ae47c71f6f5f6fad1c9a3b5e3b596c694f50",
      "color.interaction.inverse.interaction-inverse-hover": "f474c3efe45194efbbf65379fd2df8bfe49ffb8b",
      "color.interaction.inverse.interaction-inverse-active": "0cfbb211df17f3194f3f37baa1232b61682003ac",
      "color.interaction.inverse.interaction-inverse-selected": "73b96c9832c55498d84f47ab2079576c745a21b5",
      "color.interaction.focus.interaction-focus-default": "73e45c3d460484670c48ff047483595c5b970a36",
      "color.nonSemantic.gray.nonSemantic-gray-content-primary": "c4e112c90aae21d39168054d7ed3f7a274a5d4df",
      "color.nonSemantic.gray.nonSemantic-gray-content-secondary": "a93a4a143de54256d5772bfaf6a31eac680b9179",
      "color.nonSemantic.gray.nonSemantic-gray-border-default": "ce5266884a82ef0ab2ac273a7cb072d8c477738b",
      "color.nonSemantic.gray.nonSemantic-gray-border-strong": "fd30a92c14536e2bdfe84b3d8610d9b4a8187786",
      "color.nonSemantic.gray.nonSemantic-gray-border-subtle": "5c7f50e2c25249b018b4cbb8794548ab6ba097b3",
      "color.nonSemantic.gray.nonSemantic-gray-background-strong": "4ff2f91cd4c710154497de3e2263af7b5d63202a",
      "color.nonSemantic.gray.nonSemantic-gray-background-muted": "cafd0b1d9d612f2e006b9c9390c8a0c6a7e8f6ff",
      "color.nonSemantic.gray.nonSemantic-gray-background-onSubtle": "553276946a25d836aca8ae520ef6796ef613a2d1",
      "color.nonSemantic.gray.nonSemantic-gray-background-subtle": "ae4a373f92dbc9264d46f1a094bdef808548355e",
      "color.nonSemantic.gray.nonSemantic-gray-background-surface": "8ea67ba77984b18b0f169ed5f9da697014206957",
      "color.nonSemantic.white.nonSemantic-white-content-primary": "b01f9f30375891fccc387ff848d952943904cade",
      "color.nonSemantic.white.nonSemantic-white-content-secondary": "311e9cc03ef28673df1d06177ee364bfd3fc75e6",
      "color.nonSemantic.white.nonSemantic-white-border-default": "95201fa38f469e576b90f1d624514f5c6fca8f6d",
      "color.nonSemantic.white.nonSemantic-white-border-strong": "b6e995a8839f9e76ec7c6f80a1f6d43a2f77af86",
      "color.nonSemantic.white.nonSemantic-white-border-subtle": "df79ec8e89b68eb4de6be760191eb2ea872fd121",
      "color.nonSemantic.white.nonSemantic-white-background-strong": "d497e5fe844d4ee105ba93f699fecc46aa1ab408",
      "color.nonSemantic.white.nonSemantic-white-background-muted": "b0a512902e7a14a2828903878da8f744c5ee4bfe",
      "color.nonSemantic.white.nonSemantic-white-background-onSubtle": "17292ad1f75b7fefc6cfb53bbeb9900b5e15a4b9",
      "color.nonSemantic.white.nonSemantic-white-background-subtle": "3d3d448a23cfd4af431f527d3db24b27033d4861",
      "color.nonSemantic.white.nonSemantic-white-background-surface": "3eb053a3106fffbced0059f565a481de6291539c",
      "color.nonSemantic.red.nonSemantic-red-content-primary": "4eef150075367edd3d441b5fafff2c26003726c4",
      "color.nonSemantic.red.nonSemantic-red-content-secondary": "8a7175e687210d69175312a97934e31d1f556450",
      "color.nonSemantic.red.nonSemantic-red-border-default": "e2b62e67b5f3479d98b29ea92b1d701ce6540f6d",
      "color.nonSemantic.red.nonSemantic-red-border-strong": "954b41d81a7f5231d8331861125224bfb636561f",
      "color.nonSemantic.red.nonSemantic-red-border-subtle": "61206f9fef17aa78585075517a7dfcf8af7fa589",
      "color.nonSemantic.red.nonSemantic-red-background-strong": "cb08e0391c5bb51fecb47dbd5d9181267748f045",
      "color.nonSemantic.red.nonSemantic-red-background-muted": "765b7ea8fd1c9ca47e80a0af532df2fd42e207b7",
      "color.nonSemantic.red.nonSemantic-red-background-onSubtle": "958d2147e689b0d5f5fe8e06716602af5366acc9",
      "color.nonSemantic.red.nonSemantic-red-background-subtle": "5b97e532cb764bbe6dc31d4ac6bc04ac215c7326",
      "color.nonSemantic.red.nonSemantic-red-background-surface": "0edb24d3acc91c0cdc1a8ef2aeae11c59a87a8b7",
      "color.nonSemantic.magenta.nonSemantic-magenta-content-primary": "15cfacd8e0127980a8660a36cf07154935910e76",
      "color.nonSemantic.magenta.nonSemantic-magenta-content-secondary": "bc008463084e1716eeac5c33ab84b03be18914c6",
      "color.nonSemantic.magenta.nonSemantic-magenta-border-default": "85b955530fda923f05d88c138801263dc489f67d",
      "color.nonSemantic.magenta.nonSemantic-magenta-border-strong": "4a387e164df588687f754c4cabd915b98f781278",
      "color.nonSemantic.magenta.nonSemantic-magenta-border-subtle": "29fa2dd75b9159fa09d4f45ca0e6e7cfaf924f5e",
      "color.nonSemantic.magenta.nonSemantic-magenta-background-strong": "b01b0a5c6ae9ab563ddbf898a37ca96c24140253",
      "color.nonSemantic.magenta.nonSemantic-magenta-background-muted": "f67efdcd59d0c1e5e37afa6c41144c8aa2b47d57",
      "color.nonSemantic.magenta.nonSemantic-magenta-background-onSubtle": "c4dfb41c8aff094d728216c2002ba19154efa2ab",
      "color.nonSemantic.magenta.nonSemantic-magenta-background-subtle": "6a255421f0f75975d437c54ae9ef9731b19edcbc",
      "color.nonSemantic.magenta.nonSemantic-magenta-background-surface": "75a5dae99b3b78ecb5572fe176254d4daaf5ea6b",
      "color.nonSemantic.purple.nonSemantic-purple-content-primary": "f69b18aa3e4c661a177058d97b49c8a06f186937",
      "color.nonSemantic.purple.nonSemantic-purple-content-secondary": "3509a4ecca4825285e0d868764b06d9fe96e933c",
      "color.nonSemantic.purple.nonSemantic-purple-border-default": "d4ece62107ff7328c68b8ac51b78d54b888d68fb",
      "color.nonSemantic.purple.nonSemantic-purple-border-strong": "9aae23bd7a09a878f7b341d8ce8cd3bbed4b43d1",
      "color.nonSemantic.purple.nonSemantic-purple-border-subtle": "c72ec231483d0ac5d8f056c5e4964d8b879c5ca7",
      "color.nonSemantic.purple.nonSemantic-purple-background-strong": "113f1915d51e294df38bcb6dbf0a6477b4015050",
      "color.nonSemantic.purple.nonSemantic-purple-background-muted": "e268163351c9b4890bedfa9d57ce70e29eb29806",
      "color.nonSemantic.purple.nonSemantic-purple-background-onSubtle": "85cd6973890168ffcbdfab6bbb99c541f3260e68",
      "color.nonSemantic.purple.nonSemantic-purple-background-subtle": "a39bf98b00f3d668dd8a6773b3f7812f2c417e44",
      "color.nonSemantic.purple.nonSemantic-purple-background-surface": "91dcfda3469f84a586e9d6c0f980a0581ec3d129",
      "color.nonSemantic.violet.nonSemantic-violet-content-primary": "8d561c8ece002e1def3c130c571a5d4198ed905b",
      "color.nonSemantic.violet.nonSemantic-violet-content-secondary": "76aa7fef431f1077fdcd6ff426833152365d265f",
      "color.nonSemantic.violet.nonSemantic-violet-border-default": "b51ccea6501904b2f09dff7db5295a82de67aed1",
      "color.nonSemantic.violet.nonSemantic-violet-border-strong": "f823d9d6588f30c16f7091cab928bb3d83311e97",
      "color.nonSemantic.violet.nonSemantic-violet-border-subtle": "c96e192b6b8dbd3328f6aada401b30f6cbde1d8a",
      "color.nonSemantic.violet.nonSemantic-violet-background-strong": "f8183920a45f8c918ae04436bf2a2c3665a35024",
      "color.nonSemantic.violet.nonSemantic-violet-background-muted": "85669360c143d15b22baf416ac5b5b5fe7cc2bd1",
      "color.nonSemantic.violet.nonSemantic-violet-background-onSubtle": "1cd9e521eee951e9fd1b592180cb0e029f38c2c1",
      "color.nonSemantic.violet.nonSemantic-violet-background-subtle": "0f443011935041526d3cf8dcaf430d725ef5822e",
      "color.nonSemantic.violet.nonSemantic-violet-background-surface": "f15b53409881ecf80a7be94b4b1654e1234ec345",
      "color.nonSemantic.blue.nonSemantic-blue-content-primary": "3f20b5c6c291842bba3becab571af0ca7d59d0e4",
      "color.nonSemantic.blue.nonSemantic-blue-content-secondary": "67130ec5cee795b781870ee1f0f1ec5046de616e",
      "color.nonSemantic.blue.nonSemantic-blue-border-default": "a5ee063be4d619d4b5a5861c9e77e90bc05d8ab4",
      "color.nonSemantic.blue.nonSemantic-blue-border-strong": "e3346fd0e892c0c0ca422974daf380c9e6461837",
      "color.nonSemantic.blue.nonSemantic-blue-border-subtle": "823626fb44003e21c58140182f617f592f7dccf7",
      "color.nonSemantic.blue.nonSemantic-blue-background-strong": "32a6c635f5f80d6997fe5df4e3c8f9019ff00497",
      "color.nonSemantic.blue.nonSemantic-blue-background-muted": "ceb4bd94fb26520b07098608f18a5bd540856555",
      "color.nonSemantic.blue.nonSemantic-blue-background-onSubtle": "f498ec4bbbb4cb964566817d4d43228fda4488ff",
      "color.nonSemantic.blue.nonSemantic-blue-background-subtle": "1dd24d46363403cd6e85e0847a765b456ba37767",
      "color.nonSemantic.blue.nonSemantic-blue-background-surface": "096549391632e6058404074167f7e0ed2049df16",
      "color.nonSemantic.cyan.nonSemantic-cyan-content-primary": "8d2c7d624e2cf69c3d27e07290b60cdcf054ec10",
      "color.nonSemantic.cyan.nonSemantic-cyan-content-secondary": "2bf6efc177afd336685c9d540efa78bc3b925c04",
      "color.nonSemantic.cyan.nonSemantic-cyan-border-default": "dfd2bf3e2c7bfdcf080110bc6850536d6093629d",
      "color.nonSemantic.cyan.nonSemantic-cyan-border-strong": "af77c8c56c4fb3753ffaaa8a7c3a94440131e5c1",
      "color.nonSemantic.cyan.nonSemantic-cyan-border-subtle": "4e3601d04bf49a74886fcf234dd9a16a0d10039e",
      "color.nonSemantic.cyan.nonSemantic-cyan-background-strong": "5fa8b320720eabc9c9fce2c11ac9a93a66ba5dfb",
      "color.nonSemantic.cyan.nonSemantic-cyan-background-muted": "01447376e67265e606514e9520afb9b06ce1b102",
      "color.nonSemantic.cyan.nonSemantic-cyan-background-onSubtle": "bf967f1e712262189f1c5511dd22a30bfabbf12d",
      "color.nonSemantic.cyan.nonSemantic-cyan-background-subtle": "2bf253e3af3997cea7fd12c37c2c262cab6e1e96",
      "color.nonSemantic.cyan.nonSemantic-cyan-background-surface": "7bbf18902d2609c6cd240b95d69ce56b49128ce2",
      "color.nonSemantic.teal.nonSemantic-teal-content-primary": "f40fab9c22a68f428a6badcc9c5508b0df3de02a",
      "color.nonSemantic.teal.nonSemantic-teal-content-secondary": "519937fe23caf6651c11f8b0d553f4900ebfb648",
      "color.nonSemantic.teal.nonSemantic-teal-border-default": "fccd426c162d73194a08087ab587b68e7d7535cd",
      "color.nonSemantic.teal.nonSemantic-teal-border-strong": "a1c783e6a6a445b947c68fc28b5e3032262465c5",
      "color.nonSemantic.teal.nonSemantic-teal-border-subtle": "4b01bdee478bdb60cda336a644877e3c9a35f1f0",
      "color.nonSemantic.teal.nonSemantic-teal-background-strong": "2e7861d1ff4cc6afc2e8303c577b6560661afd7f",
      "color.nonSemantic.teal.nonSemantic-teal-background-muted": "9f7adb6c5321ab27c00f28ab0b7e689177475766",
      "color.nonSemantic.teal.nonSemantic-teal-background-onSubtle": "8b3ccfd7bb54d6b4614c81e5817f258a17c851c4",
      "color.nonSemantic.teal.nonSemantic-teal-background-subtle": "2d9f236dad2a9084866d0be953919ac1e004447e",
      "color.nonSemantic.teal.nonSemantic-teal-background-surface": "9fb81c2c87c401a3e543d179260bbfa70ee49ee5",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-content-primary": "d908706f2595466042bc9c59469bf397bb34e596",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-content-secondary": "4a4fce71844df3aadee2df48a790a0735e0997ec",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-border-default": "9d439e90a8427059fc6535fc6869215ccecfd274",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-border-strong": "99233b696d5bfbeccd08bd0bc0453fff99369c7a",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-border-subtle": "8a210628c3b9f4c78f401561f740b5ddfc879dc0",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-background-strong": "4423aeb34035a8d1736aa5d4ee3bac24d813e3a2",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-background-muted": "9005342cd237ad1af7b72394d355868c3e9efc4d",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-background-onSubtle": "f5ba371e8c897daeb8df2826fce29fa241a6a2ca",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-background-subtle": "99d2062dc708f42eb51436b71944d100c7c97032",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-background-surface": "d5f17b42fd5a2e25d01246baaa3605078fd2c043",
      "color.nonSemantic.green.nonSemantic-green-content-primary": "53c0d72df153a344d6f54cd958950d01e94a9931",
      "color.nonSemantic.green.nonSemantic-green-content-secondary": "8c046fb4beca3351430d9d240b567c22070fd1e5",
      "color.nonSemantic.green.nonSemantic-green-border-default": "a003644b67d4c2d2d5c0b03749fa071ec4bd7d98",
      "color.nonSemantic.green.nonSemantic-green-border-strong": "285e46b90ff0b1af5fb8a175c040b8ac559e0f91",
      "color.nonSemantic.green.nonSemantic-green-border-subtle": "aecaace49d0ac0923bdea848fa50ad5e7513f962",
      "color.nonSemantic.green.nonSemantic-green-background-strong": "4fecf06d8c9e0bc81a0d618ed9638e2889e2ffa8",
      "color.nonSemantic.green.nonSemantic-green-background-muted": "9e6eb48e3656e4da6f877259a276bcf2dc8459c5",
      "color.nonSemantic.green.nonSemantic-green-background-onSubtle": "c29f3068777fa807bb20a29a57cc6ea0a18c19c1",
      "color.nonSemantic.green.nonSemantic-green-background-subtle": "472a8deb849d3fcc8742def1a7341cb980b1a9f5",
      "color.nonSemantic.green.nonSemantic-green-background-surface": "260dbf3cd482e7037c291f237922352713830e46",
      "color.nonSemantic.orange.nonSemantic-orange-content-primary": "dfd4dcae3b09bd36ebfe6e7264783b02c8a6d5c0",
      "color.nonSemantic.orange.nonSemantic-orange-content-secondary": "e8aa953047021ca35742e2398ed70c05945d1128",
      "color.nonSemantic.orange.nonSemantic-orange-border-default": "d7c20daf3539a825ea99bead757cd2c269418389",
      "color.nonSemantic.orange.nonSemantic-orange-border-strong": "d80caa8d63c8ae0a5eb9bcceced74df4c517c227",
      "color.nonSemantic.orange.nonSemantic-orange-border-subtle": "653651d44a5dc379230e7ea02dc3922b1fb632f7",
      "color.nonSemantic.orange.nonSemantic-orange-background-strong": "a6c9243645e08eab4535ff350e69ab4c5009b89e",
      "color.nonSemantic.orange.nonSemantic-orange-background-muted": "6c4f66d7deecfb852add754ad3072283f829aabc",
      "color.nonSemantic.orange.nonSemantic-orange-background-onSubtle": "7516d157d05ab956538a78aed5cc91b3b0d1e4d5",
      "color.nonSemantic.orange.nonSemantic-orange-background-subtle": "d49e51c20c824455d1cfda4b51e1630dedfd3ddb",
      "color.nonSemantic.orange.nonSemantic-orange-background-surface": "5f2b021f6bab6c1a09925684bb9e0eed2d99626d",
      "borderWidth.border-width-focus": "4ce96440e279d7c9eacefd873a8245504e1371c5"
    },
    "type": "other",
    "value": "[object Object]"
  },
  "Dark": {
    "id": "f54c060299a7c98ec7c04f81a9b5e2ac3a16b03c",
    "$figmaStyleReferences": {},
    "selectedTokenSets": {
      "global": "source",
      "alias": "source",
      "component/dark": "enabled"
    },
    "group": "Component",
    "$figmaCollectionId": "VariableCollectionId:15:2966",
    "$figmaModeId": "34:0",
    "$figmaVariableReferences": {
      "color.content.content-primary": "588bb1a1a38d7691ab8d6e22c7b09f55b73b4ed2",
      "color.content.content-secondary": "406f47621f204e8fe3d3ef2fb6c20a9b6dbac065",
      "color.content.content-tertiary": "4036a5391164ba0dad912e619d770bc3842bf6c7",
      "color.content.content-disabled": "8a0c8f80c24e88366fda1a4c800b73cacc4c04b9",
      "color.content.content-primary-inverse": "60527cdcd62c0a8525286dc323ca7fa6f2367278",
      "color.content.content-secondary-inverse": "34478916da8fa840618dd1e1d0b19bab4278102f",
      "color.content.content-tertiary-inverse": "a1dcc8780beb9e2332ecefbc73fc37193809ed90",
      "color.content.content-disabled-inverse": "449b9aeb3aaa279cccdcaf7856c2231aadd8d2ee",
      "color.content.content-info-primary": "bd91949e9ccfd444e5442130f37d51ebe632adc8",
      "color.content.content-info-secondary": "f285d3eeeda231b43a1f09811c005df120eb7252",
      "color.content.content-success-primary": "bf75a0072763529fc4fe2fcda441274ae2271973",
      "color.content.content-success-secondary": "ec94bb90dcbca17d1122741385623ebbb53beb74",
      "color.content.content-warning-primary": "6cc5392cf551c5696fb1bf528b7c82528b2318d3",
      "color.content.content-warning-secondary": "314938707470fd3cc2a79aad2f87f00f7d7cd4ca",
      "color.content.content-danger-primary": "641ae880bfe3dbcee8939949d996a8454c233bbb",
      "color.content.content-danger-secondary": "a2f4c098b19c888173684440374a0cf4d25767b9",
      "color.content.content-brand-primary": "5f7d523155a915a0f7ec969fa4c4efb01d640bdf",
      "color.content.content-brand-secondary": "8bb9c578f9e3c76772621a324998f5d60475df9e",
      "color.border.border-default": "d2d05be092a753b2c889e7dfb47b5f3e205655ce",
      "color.border.border-defaultA": "3152515025c34401579040ecf6f562345c1a9e3c",
      "color.border.border-inverse": "79811c3353d1f6d348bfcb17462fb8969f0328c3",
      "color.border.border-neutral-strong": "5ed1c3a529b2534183e8161061ce319af3564ed5",
      "color.border.border-neutral-subtle": "45d9f5ba653042494392aed271734a6e1ad0f104",
      "color.border.border-info-strong": "747f796a73252e4c7d1c82ba34b8c1c752db303d",
      "color.border.border-info-subtle": "ac911dc6f96557648b1b7dc74a2486ce5026d03e",
      "color.border.border-success-strong": "814fc8dcb0547932b402b6e0dd07f59dd29e1d3c",
      "color.border.border-success-subtle": "ad92536e1bdd06f68bf6ff05efb09ee7a7f76c80",
      "color.border.border-warning-strong": "7ad3235f8985462aa29e326110ddde530687fad7",
      "color.border.border-warning-subtle": "e80a3e945391f920809453b38126b25982ba0653",
      "color.border.border-danger-strong": "f897981f378c2bc162dbf0408f0d431a0af252eb",
      "color.border.border-danger-subtle": "01f1588af7f9f272a1f0a07f44a833b2f43ab779",
      "color.background.background-default": "363be3d920a7e4c376577c892974a4c0abfe64c5",
      "color.background.background-inverse": "6420dbeeb9f76a83e2a4dde4d4c7f06664c889eb",
      "color.background.background-neutral-strong": "1ebb001fdd7f167df306e70595ff350fa1af0434",
      "color.background.background-neutral-muted": "5d09b218b88e918b2c87befbc63ce7632bd0c42d",
      "color.background.background-neutral-onSubtle": "3fcec4ff4c051147b7a56ba0f5012ec3958f43e5",
      "color.background.background-neutral-subtle": "e4857e5a01a7120347c41831d1227e06d6a6de03",
      "color.background.background-neutral-surface": "0d6d23e0b11b00f09285d37209b082045dbcc8d3",
      "color.background.background-info-strong": "47a2a4126bffddde752c4012d5b905593e0c6ac4",
      "color.background.background-info-muted": "739d9526458f500ff2c15deb891a5b922a07081a",
      "color.background.background-info-onSubtle": "2c931f51d5ce50ca79b0efd183f534db42fa6fae",
      "color.background.background-info-subtle": "a81491f255b9405d640ef915f8c20809c0c0613a",
      "color.background.background-info-surface": "11e90febfad6a796c4792357c215d257df367710",
      "color.background.background-success-strong": "aff4995a2951fe430758cda342adde5384d04bdd",
      "color.background.background-success-muted": "a8771222dc99961225c9c0bf3640790dc706f628",
      "color.background.background-success-onSubtle": "776bbc0663efb404355ffc7b9a465e6ae6fabfb9",
      "color.background.background-success-subtle": "c7f923458409b26269feea484b8b1df3556fd66b",
      "color.background.background-success-surface": "d309351e093dd6d594d381dd65b96d86b2b14182",
      "color.background.background-warning-strong": "61314f93ffb73864eeb4b8460605dd4cc5c73b19",
      "color.background.background-warning-muted": "ac5ee29a7f7b2d461ba47927b5d513fa07b9efdb",
      "color.background.background-warning-onSubtle": "bd96864f6a1bc9ea64ead9d00478e0878d91669f",
      "color.background.background-warning-subtle": "c46692b18fde84a4729d095941a8db76f0442898",
      "color.background.background-warning-surface": "c5355716314a10a3ae122e8ff5e363fec2efb359",
      "color.background.background-danger-strong": "e7b3c926e36f2db615a676d1b678225529f30dea",
      "color.background.background-danger-muted": "bdae80d77d41b0ec8d1f5b3d44a6c8125e37069d",
      "color.background.background-danger-onSubtle": "0ea41835af76c4e850632e3c2e552277bb1a0a01",
      "color.background.background-danger-subtle": "0e7f954741afe1761382f5b609532c96b09e07cb",
      "color.background.background-danger-surface": "8540ff9e1317d378d5d140c79495011148095f90",
      "color.background.background-brand-strong": "5eab0e32a51576fbf1dedf376a8a1d4e382c6dfb",
      "color.background.background-brand-muted": "d53c72c1deb1285d4a5272632fac2481e91a7174",
      "color.background.background-brand-onSubtle": "8271c7c1f18ab458d7cd576a68b360d17a10ae7d",
      "color.background.background-brand-surface": "d0a6e01a33eb848bd30a2aef6b9da8205637cf07",
      "color.background.background-brand-subtle": "6b92410feb9d5deb805ae4fb531bd8a2fa4233f6",
      "color.action.primary.action-primary-normal": "55715683cfe6ba54ff2c4b2c3f1e76cf910a5764",
      "color.action.primary.action-primary-hover": "aba94928373e64c65066474405b184955e80ba2e",
      "color.action.primary.action-primary-active": "115d4ca5f133cf0635dcd2b721ed7422ed68d576",
      "color.action.primary.action-primary-selected": "8506dab154236cb3b9ddec9db59fdda751a0bfa3",
      "color.action.primary.action-primary-subtle-normal": "04bbf297c4dd23276ab8227807aaa27219db5adb",
      "color.action.primary.action-primary-subtle-hover": "d9f879f8685f806d62fb79dd3e063e4ff3ce0cb7",
      "color.action.primary.action-primary-subtle-active": "86043f114695a352bef4a58da003e5482ae729b0",
      "color.action.primary.action-primary-subtle-selected": "6b80521ec2581061b7eeeb728fe758c053e92168",
      "color.action.neutral.action-neutral-normal": "3d88999013a77966ae77afb977bed740053713df",
      "color.action.neutral.action-neutral-hover": "1e792c5c4cafb931b1c88357f258d364bebaa1fc",
      "color.action.neutral.action-neutral-active": "4c8a388072572f9af777dfd8daaabe8c2a7d1414",
      "color.action.neutral.action-neutral-selected": "66bb30a37079a4db18ff9ca4bedb941f21da77a3",
      "color.action.neutral.action-neutral-subtle-normal": "7c58692aea3efb7e04bc116cf56775bc226585cb",
      "color.action.neutral.action-neutral-subtle-hover": "4d24147915a3adfe4f092e91e8118f330a6e3044",
      "color.action.neutral.action-neutral-subtle-active": "5347ca2cb2a2f9d5a8b05685b4575c867488a933",
      "color.action.neutral.action-neutral-subtle-selected": "8a5e497680ddc90c15c00c3f0417be4a697d0d51",
      "color.action.success.action-success-normal": "4035b24b1a812b68a46a546757278c8a8ce82dbc",
      "color.action.success.action-success-hover": "2c3f0904ddae96c6de84becaa926563b10bd6e76",
      "color.action.success.action-success-active": "28a5892a4e698da0e15e3a8576ecf10c19b8503b",
      "color.action.success.action-success-selected": "4e77df534b1f0d62ea7e074216a208b7b9fd872d",
      "color.action.success.action-success-subtle-normal": "d26707037d3573db8cd6abd53d913f37fa6ea11c",
      "color.action.success.action-success-subtle-hover": "8c029ac08a43dd8d2c2b340b9c27c0401277f051",
      "color.action.success.action-success-subtle-active": "f4ad60c8e1eabfc5afd346d2d2a79f8df86e6acf",
      "color.action.success.action-success-subtle-selected": "4054238da2bf4a8bdb41c7aefb1baa01b7c3c70f",
      "color.action.danger.action-danger-normal": "6eb7d7949e26a4c1203cc99a773050608d320409",
      "color.action.danger.action-danger-hover": "6f6e9cf7a3c00ddd02eb9c324ef926227bbcbfce",
      "color.action.danger.action-danger-active": "02f73a989e66000a8d5c81bdc51b76876800e283",
      "color.action.danger.action-danger-selected": "cc2c28f3be99ef8e9180c7b371cae25717f6d6c1",
      "color.action.danger.action-danger-subtle-normal": "c74fb58d55ac7e1eb0fa1a253fd846464c119c12",
      "color.action.danger.action-danger-subtle-hover": "ce6a7de79b5098bba3b4e137548048aa437547af",
      "color.action.danger.action-danger-subtle-active": "5a3298e45e70ddcf184e8d379dd34c7ed93290e8",
      "color.action.danger.action-danger-subtle-selected": "143254d9d9e5f2a5ffa3a2451f57d8f47bc9fa65",
      "color.action.ghost.action-ghost-normal": "ad244e8b31e638fb97fb3b4b2b799999abaa2ba7",
      "color.action.ghost.action-ghost-hover": "78f6eecae28ce5fa5af3e256e3a54aee3deb9d48",
      "color.action.ghost.action-ghost-active": "20d11ec427f20df1dbc15046f9561f1a59c3939a",
      "color.action.ghost.action-ghost-selected": "32e02747a0cc28fe3d3b4b2eaf511a9836b1e04e",
      "color.action.ghost.action-ghost-inverse-hover": "83e760c59a4439629243bebbed59f04e223da8a0",
      "color.action.ghost.action-ghost-inverse-active": "db395dd80cb03245d1a7d3ec6d314ad166ba1a09",
      "color.action.ghost.action-ghost-inverse-selected": "7987061bcc85fedb8c7a46a73bbc931e62575e27",
      "color.action.ghost.action-ghost-danger-hover": "11013d32fbd86922dae475a3def3bfd5805e4131",
      "color.action.ghost.action-ghost-danger-active": "3b0c518efb631a007c10f986e8bf8e8727dd8dc0",
      "color.action.ghost.action-ghost-danger-selected": "45ecd9bc713512182c5962fd6620392c0e271d5a",
      "color.action.outline.action-outline-normal": "279d4e057502e36476fb57b1baa9105ec29ea61a",
      "color.action.outline.action-outline-hover": "25768934ccfed19f9a070a44d1df2beabd775395",
      "color.action.outline.action-outline-active": "d3a6a3ada55d60f44bc0df79afe29f2878282d25",
      "color.action.outline.action-outline-selected": "df4306438c64567118c29927718a78dac08ee47f",
      "color.action.inverse.action-inverse-normal": "c982c799e3ee364c882d80414e2bbe5c2062438f",
      "color.action.inverse.action-inverse-hover": "aed0bf06144a438e38c71b237c6a75ef1f9cd261",
      "color.action.inverse.action-inverse-active": "49b70a5bce07d752ead9b5da8e426d8364e5bfeb",
      "color.action.inverse.action-inverse-selected": "02141600494008950c6a269f43f9543a3108ea23",
      "color.action.reverseInverse.action-reverseInverse-normal": "a88b33e4cd5b9b97c9ad094fd727020c952d4d62",
      "color.action.reverseInverse.action-reverseInverse-hover": "b6492e723e2d5ef68fbcdb2d97fc8683ade4db49",
      "color.action.reverseInverse.action-reverseInverse-active": "aa49dde4eaa9917746427667d0f253e5509eabd0",
      "color.action.reverseInverse.action-reverseInverse-selected": "e6e2510fc4846595fb5b28c406edc9bec8d58d8e",
      "color.interaction.default.interaction-default-normal": "f434d0849fa7bea3960f0a5f77eed5ad0a530a01",
      "color.interaction.default.interaction-default-hover": "0115c2e168ad1e62e5320dcdb15602aad34bcd1a",
      "color.interaction.default.interaction-default-active": "632afae437e1f24c04633c290fbe6696a47009b9",
      "color.interaction.default.interaction-default-selected": "11701ed526eea476c93c28ccfb4b120f2b99be1f",
      "color.interaction.default.interaction-default-subtle-normal": "4954d2b4c998ebc884823eafa5c7cf009476123e",
      "color.interaction.default.interaction-default-subtle-hover": "1b52bc256f30e8d06593c78c18af88ef4097620e",
      "color.interaction.default.interaction-default-subtle-active": "b9a5cde8cd805f911a3523d4cac39c749d2c878e",
      "color.interaction.default.interaction-default-subtle-selected": "cdf9b89c6072e32f3f585be6f4b48d2ccfb209a8",
      "color.interaction.neutral.interaction-neutral-normal": "971fa1808b32cd1226dd857716cd8f380faaa6dd",
      "color.interaction.neutral.interaction-neutral-hover": "1cd36913150376da26dfd1357bcde1c21afa8eac",
      "color.interaction.neutral.interaction-neutral-active": "02bb7968fe02d8f1954bc81d60346f61ba3e19d6",
      "color.interaction.neutral.interaction-neutral-selected": "550cc8a01df9aa996cf93215eb422992f588ca5e",
      "color.interaction.neutral.interaction-neutral-subtle-normal": "491fd7f0041b230b3e10defddc2b257614427dac",
      "color.interaction.neutral.interaction-neutral-subtle-hover": "ea05debf52dcf3f0c1f631d984a1a0ad6afebb2c",
      "color.interaction.neutral.interaction-neutral-subtle-active": "bf19e65bcc8e8c350d8d33aa9f24917928462261",
      "color.interaction.neutral.interaction-neutral-subtle-selected": "08b5d1d8772378f852e535f2cb3534535b670115",
      "color.interaction.danger.interaction-danger-normal": "2c87ca6bf91d50a9fb1367f6b7ee7347439c3ee5",
      "color.interaction.danger.interaction-danger-hover": "7ac2ed09178a55cd80fc3f192c17f73ca752051a",
      "color.interaction.danger.interaction-danger-active": "8d1b7a277ccea935e75030b4bd1182ff25a8cbe1",
      "color.interaction.danger.interaction-danger-selected": "8c242b5d6706007f64a9c2b2fc6347cc89955c6d",
      "color.interaction.danger.interaction-danger-subtle-normal": "756ba62476fce64637f8439f8f3ddeb513b3e3c1",
      "color.interaction.danger.interaction-danger-subtle-hover": "d009c3842d8878f137cc7899d4f53125bb3f435c",
      "color.interaction.danger.interaction-danger-subtle-active": "d7f92a3725910c3c7b3d1b594395fbe612a32809",
      "color.interaction.danger.interaction-danger-subtle-selected": "7ae8c4fefd0fc3cd7600c103967d8d40f1ad545e",
      "color.interaction.ghost.interaction-ghost-normal": "0396c4559c669b4444ade8bae40f8477abb68c39",
      "color.interaction.ghost.interaction-ghost-hover": "a8e953b7b36826bf330aa886fa0f9e236bac2db4",
      "color.interaction.ghost.interaction-ghost-active": "406c95bb948d768bf4a080d05075e0d2f3ad476d",
      "color.interaction.ghost.interaction-ghost-selected": "4fc7dd02ca06345237417be5dee009835a1d5166",
      "color.interaction.ghost.interaction-ghost-inverse-hover": "9168529a95381fe910bedd69f9c51574478e4f83",
      "color.interaction.ghost.interaction-ghost-inverse-normal": "4e463f2045999204ca254cf2c5c8edc0dfc61235",
      "color.interaction.ghost.interaction-ghost-inverse-selected": "09e5553cfa8b081adc0a8345cbd0582665f7a5d2",
      "color.interaction.ghost.interaction-ghost-danger-hover": "f2016889f7ea200b4a9877a749871bbb3b20d05d",
      "color.interaction.ghost.interaction-ghost-danger-normal": "d4571d9760c679cad8c2c9d871537706b7b1a24f",
      "color.interaction.ghost.interaction-ghost-danger-selected": "d33a0d4878e1b2f9dc6cfdcf0a0a9d79c84b47b9",
      "color.interaction.disabled.interaction-disabled-normal": "3178fff17097a05058aea714094144f6bebd0db2",
      "color.interaction.disabled.interaction-disabled-hover": "096171412d8cfea6449216d35ee9cfba5ec9fc3e",
      "color.interaction.disabled.interaction-disabled-active": "a31d9723219f5e009e77c517b41117bbfb1923ad",
      "color.interaction.disabled.interaction-disabled-subtle-normal": "418b8c6d1cfaec19095fa5978ef019d9f6eb575b",
      "color.interaction.disabled.interaction-disabled-subtle-hover": "e83ebfb444280f574c6a386007db57fb249aea1c",
      "color.interaction.disabled.interaction-disabled-subtle-active": "0bf8b4e7ede3361c55fffd3db2d89a52ff7b6f7a",
      "color.interaction.border.interaction-border-normal": "2560e2abc14d0abe3e44a61317f56172760a40d9",
      "color.interaction.border.interaction-border-hover": "89c14f3adeb386231ca53dbcd2e8140c1d9352a4",
      "color.interaction.border.interaction-border-active": "67354bfd0978dd3985a13722b169cf3d8cbff994",
      "color.interaction.border.interaction-border-selected": "fe47de6ab22d98e22ec5e4b267b50cedbf0d57dd",
      "color.interaction.border.interaction-border-neutral-normal": "5c7a0ada16d5aaec1251d432d417ddcabf91478f",
      "color.interaction.border.interaction-border-neutral-hover": "06126a4665a9dace158f180a6aa3685753852f6e",
      "color.interaction.border.interaction-border-neutral-active": "454e3b69747ecef91f6838a350526a3760cc1096",
      "color.interaction.border.interaction-border-neutral-selected": "2a9206af19f0931a587885df92d1e627cd3425b5",
      "color.interaction.border.interaction-border-danger": "13d212359683484f66618ae103a1b940d5eefebb",
      "color.interaction.background.interaction-background-modal": "ecc18c7acbc8c8301db1593d6f1dfc47d5046d59",
      "color.interaction.background.interaction-background-modeless": "538652bf4f3a8550c51c57bb65bd4c74ccaabdd9",
      "color.interaction.background.interaction-background-modeless-inverse": "e146cec78f2538039b8d43624f0d613dca80b304",
      "color.interaction.background.interaction-background-sidepanel": "173507b20dc9568e0b11c379748b200a4da9ab1d",
      "color.interaction.background.interaction-background-formField": "f1ae9276578f81a06816a034ad5328e54908c317",
      "color.interaction.background.interaction-background-dimmer": "6063a96ca376a4f251905bb8569e5b0dc0271bdb",
      "color.interaction.inverse.interaction-inverse-normal": "cbe8ae47c71f6f5f6fad1c9a3b5e3b596c694f50",
      "color.interaction.inverse.interaction-inverse-hover": "f474c3efe45194efbbf65379fd2df8bfe49ffb8b",
      "color.interaction.inverse.interaction-inverse-active": "0cfbb211df17f3194f3f37baa1232b61682003ac",
      "color.interaction.inverse.interaction-inverse-selected": "73b96c9832c55498d84f47ab2079576c745a21b5",
      "color.interaction.focus.interaction-focus-default": "73e45c3d460484670c48ff047483595c5b970a36",
      "color.nonSemantic.gray.nonSemantic-gray-content-primary": "c4e112c90aae21d39168054d7ed3f7a274a5d4df",
      "color.nonSemantic.gray.nonSemantic-gray-content-secondary": "a93a4a143de54256d5772bfaf6a31eac680b9179",
      "color.nonSemantic.gray.nonSemantic-gray-border-default": "ce5266884a82ef0ab2ac273a7cb072d8c477738b",
      "color.nonSemantic.gray.nonSemantic-gray-border-strong": "fd30a92c14536e2bdfe84b3d8610d9b4a8187786",
      "color.nonSemantic.gray.nonSemantic-gray-border-subtle": "5c7f50e2c25249b018b4cbb8794548ab6ba097b3",
      "color.nonSemantic.gray.nonSemantic-gray-background-strong": "4ff2f91cd4c710154497de3e2263af7b5d63202a",
      "color.nonSemantic.gray.nonSemantic-gray-background-muted": "cafd0b1d9d612f2e006b9c9390c8a0c6a7e8f6ff",
      "color.nonSemantic.gray.nonSemantic-gray-background-onSubtle": "553276946a25d836aca8ae520ef6796ef613a2d1",
      "color.nonSemantic.gray.nonSemantic-gray-background-subtle": "ae4a373f92dbc9264d46f1a094bdef808548355e",
      "color.nonSemantic.gray.nonSemantic-gray-background-surface": "8ea67ba77984b18b0f169ed5f9da697014206957",
      "color.nonSemantic.white.nonSemantic-white-content-primary": "b01f9f30375891fccc387ff848d952943904cade",
      "color.nonSemantic.white.nonSemantic-white-content-secondary": "311e9cc03ef28673df1d06177ee364bfd3fc75e6",
      "color.nonSemantic.white.nonSemantic-white-border-default": "95201fa38f469e576b90f1d624514f5c6fca8f6d",
      "color.nonSemantic.white.nonSemantic-white-border-strong": "b6e995a8839f9e76ec7c6f80a1f6d43a2f77af86",
      "color.nonSemantic.white.nonSemantic-white-border-subtle": "df79ec8e89b68eb4de6be760191eb2ea872fd121",
      "color.nonSemantic.white.nonSemantic-white-background-strong": "d497e5fe844d4ee105ba93f699fecc46aa1ab408",
      "color.nonSemantic.white.nonSemantic-white-background-muted": "b0a512902e7a14a2828903878da8f744c5ee4bfe",
      "color.nonSemantic.white.nonSemantic-white-background-onSubtle": "17292ad1f75b7fefc6cfb53bbeb9900b5e15a4b9",
      "color.nonSemantic.white.nonSemantic-white-background-subtle": "3d3d448a23cfd4af431f527d3db24b27033d4861",
      "color.nonSemantic.white.nonSemantic-white-background-surface": "3eb053a3106fffbced0059f565a481de6291539c",
      "color.nonSemantic.red.nonSemantic-red-content-primary": "4eef150075367edd3d441b5fafff2c26003726c4",
      "color.nonSemantic.red.nonSemantic-red-content-secondary": "8a7175e687210d69175312a97934e31d1f556450",
      "color.nonSemantic.red.nonSemantic-red-border-default": "e2b62e67b5f3479d98b29ea92b1d701ce6540f6d",
      "color.nonSemantic.red.nonSemantic-red-border-strong": "954b41d81a7f5231d8331861125224bfb636561f",
      "color.nonSemantic.red.nonSemantic-red-border-subtle": "61206f9fef17aa78585075517a7dfcf8af7fa589",
      "color.nonSemantic.red.nonSemantic-red-background-strong": "cb08e0391c5bb51fecb47dbd5d9181267748f045",
      "color.nonSemantic.red.nonSemantic-red-background-muted": "765b7ea8fd1c9ca47e80a0af532df2fd42e207b7",
      "color.nonSemantic.red.nonSemantic-red-background-onSubtle": "958d2147e689b0d5f5fe8e06716602af5366acc9",
      "color.nonSemantic.red.nonSemantic-red-background-subtle": "5b97e532cb764bbe6dc31d4ac6bc04ac215c7326",
      "color.nonSemantic.red.nonSemantic-red-background-surface": "0edb24d3acc91c0cdc1a8ef2aeae11c59a87a8b7",
      "color.nonSemantic.magenta.nonSemantic-magenta-content-primary": "15cfacd8e0127980a8660a36cf07154935910e76",
      "color.nonSemantic.magenta.nonSemantic-magenta-content-secondary": "bc008463084e1716eeac5c33ab84b03be18914c6",
      "color.nonSemantic.magenta.nonSemantic-magenta-border-default": "85b955530fda923f05d88c138801263dc489f67d",
      "color.nonSemantic.magenta.nonSemantic-magenta-border-strong": "4a387e164df588687f754c4cabd915b98f781278",
      "color.nonSemantic.magenta.nonSemantic-magenta-border-subtle": "29fa2dd75b9159fa09d4f45ca0e6e7cfaf924f5e",
      "color.nonSemantic.magenta.nonSemantic-magenta-background-strong": "b01b0a5c6ae9ab563ddbf898a37ca96c24140253",
      "color.nonSemantic.magenta.nonSemantic-magenta-background-muted": "f67efdcd59d0c1e5e37afa6c41144c8aa2b47d57",
      "color.nonSemantic.magenta.nonSemantic-magenta-background-onSubtle": "c4dfb41c8aff094d728216c2002ba19154efa2ab",
      "color.nonSemantic.magenta.nonSemantic-magenta-background-subtle": "6a255421f0f75975d437c54ae9ef9731b19edcbc",
      "color.nonSemantic.magenta.nonSemantic-magenta-background-surface": "75a5dae99b3b78ecb5572fe176254d4daaf5ea6b",
      "color.nonSemantic.purple.nonSemantic-purple-content-primary": "f69b18aa3e4c661a177058d97b49c8a06f186937",
      "color.nonSemantic.purple.nonSemantic-purple-content-secondary": "3509a4ecca4825285e0d868764b06d9fe96e933c",
      "color.nonSemantic.purple.nonSemantic-purple-border-default": "d4ece62107ff7328c68b8ac51b78d54b888d68fb",
      "color.nonSemantic.purple.nonSemantic-purple-border-strong": "9aae23bd7a09a878f7b341d8ce8cd3bbed4b43d1",
      "color.nonSemantic.purple.nonSemantic-purple-border-subtle": "c72ec231483d0ac5d8f056c5e4964d8b879c5ca7",
      "color.nonSemantic.purple.nonSemantic-purple-background-strong": "113f1915d51e294df38bcb6dbf0a6477b4015050",
      "color.nonSemantic.purple.nonSemantic-purple-background-muted": "e268163351c9b4890bedfa9d57ce70e29eb29806",
      "color.nonSemantic.purple.nonSemantic-purple-background-onSubtle": "85cd6973890168ffcbdfab6bbb99c541f3260e68",
      "color.nonSemantic.purple.nonSemantic-purple-background-subtle": "a39bf98b00f3d668dd8a6773b3f7812f2c417e44",
      "color.nonSemantic.purple.nonSemantic-purple-background-surface": "91dcfda3469f84a586e9d6c0f980a0581ec3d129",
      "color.nonSemantic.violet.nonSemantic-violet-content-primary": "8d561c8ece002e1def3c130c571a5d4198ed905b",
      "color.nonSemantic.violet.nonSemantic-violet-content-secondary": "76aa7fef431f1077fdcd6ff426833152365d265f",
      "color.nonSemantic.violet.nonSemantic-violet-border-default": "b51ccea6501904b2f09dff7db5295a82de67aed1",
      "color.nonSemantic.violet.nonSemantic-violet-border-strong": "f823d9d6588f30c16f7091cab928bb3d83311e97",
      "color.nonSemantic.violet.nonSemantic-violet-border-subtle": "c96e192b6b8dbd3328f6aada401b30f6cbde1d8a",
      "color.nonSemantic.violet.nonSemantic-violet-background-strong": "f8183920a45f8c918ae04436bf2a2c3665a35024",
      "color.nonSemantic.violet.nonSemantic-violet-background-muted": "85669360c143d15b22baf416ac5b5b5fe7cc2bd1",
      "color.nonSemantic.violet.nonSemantic-violet-background-onSubtle": "1cd9e521eee951e9fd1b592180cb0e029f38c2c1",
      "color.nonSemantic.violet.nonSemantic-violet-background-subtle": "0f443011935041526d3cf8dcaf430d725ef5822e",
      "color.nonSemantic.violet.nonSemantic-violet-background-surface": "f15b53409881ecf80a7be94b4b1654e1234ec345",
      "color.nonSemantic.blue.nonSemantic-blue-content-primary": "3f20b5c6c291842bba3becab571af0ca7d59d0e4",
      "color.nonSemantic.blue.nonSemantic-blue-content-secondary": "67130ec5cee795b781870ee1f0f1ec5046de616e",
      "color.nonSemantic.blue.nonSemantic-blue-border-default": "a5ee063be4d619d4b5a5861c9e77e90bc05d8ab4",
      "color.nonSemantic.blue.nonSemantic-blue-border-strong": "e3346fd0e892c0c0ca422974daf380c9e6461837",
      "color.nonSemantic.blue.nonSemantic-blue-border-subtle": "823626fb44003e21c58140182f617f592f7dccf7",
      "color.nonSemantic.blue.nonSemantic-blue-background-strong": "32a6c635f5f80d6997fe5df4e3c8f9019ff00497",
      "color.nonSemantic.blue.nonSemantic-blue-background-muted": "ceb4bd94fb26520b07098608f18a5bd540856555",
      "color.nonSemantic.blue.nonSemantic-blue-background-onSubtle": "f498ec4bbbb4cb964566817d4d43228fda4488ff",
      "color.nonSemantic.blue.nonSemantic-blue-background-subtle": "1dd24d46363403cd6e85e0847a765b456ba37767",
      "color.nonSemantic.blue.nonSemantic-blue-background-surface": "096549391632e6058404074167f7e0ed2049df16",
      "color.nonSemantic.cyan.nonSemantic-cyan-content-primary": "8d2c7d624e2cf69c3d27e07290b60cdcf054ec10",
      "color.nonSemantic.cyan.nonSemantic-cyan-content-secondary": "2bf6efc177afd336685c9d540efa78bc3b925c04",
      "color.nonSemantic.cyan.nonSemantic-cyan-border-default": "dfd2bf3e2c7bfdcf080110bc6850536d6093629d",
      "color.nonSemantic.cyan.nonSemantic-cyan-border-strong": "af77c8c56c4fb3753ffaaa8a7c3a94440131e5c1",
      "color.nonSemantic.cyan.nonSemantic-cyan-border-subtle": "4e3601d04bf49a74886fcf234dd9a16a0d10039e",
      "color.nonSemantic.cyan.nonSemantic-cyan-background-strong": "5fa8b320720eabc9c9fce2c11ac9a93a66ba5dfb",
      "color.nonSemantic.cyan.nonSemantic-cyan-background-muted": "01447376e67265e606514e9520afb9b06ce1b102",
      "color.nonSemantic.cyan.nonSemantic-cyan-background-onSubtle": "bf967f1e712262189f1c5511dd22a30bfabbf12d",
      "color.nonSemantic.cyan.nonSemantic-cyan-background-subtle": "2bf253e3af3997cea7fd12c37c2c262cab6e1e96",
      "color.nonSemantic.cyan.nonSemantic-cyan-background-surface": "7bbf18902d2609c6cd240b95d69ce56b49128ce2",
      "color.nonSemantic.teal.nonSemantic-teal-content-primary": "f40fab9c22a68f428a6badcc9c5508b0df3de02a",
      "color.nonSemantic.teal.nonSemantic-teal-content-secondary": "519937fe23caf6651c11f8b0d553f4900ebfb648",
      "color.nonSemantic.teal.nonSemantic-teal-border-default": "fccd426c162d73194a08087ab587b68e7d7535cd",
      "color.nonSemantic.teal.nonSemantic-teal-border-strong": "a1c783e6a6a445b947c68fc28b5e3032262465c5",
      "color.nonSemantic.teal.nonSemantic-teal-border-subtle": "4b01bdee478bdb60cda336a644877e3c9a35f1f0",
      "color.nonSemantic.teal.nonSemantic-teal-background-strong": "2e7861d1ff4cc6afc2e8303c577b6560661afd7f",
      "color.nonSemantic.teal.nonSemantic-teal-background-muted": "9f7adb6c5321ab27c00f28ab0b7e689177475766",
      "color.nonSemantic.teal.nonSemantic-teal-background-onSubtle": "8b3ccfd7bb54d6b4614c81e5817f258a17c851c4",
      "color.nonSemantic.teal.nonSemantic-teal-background-subtle": "2d9f236dad2a9084866d0be953919ac1e004447e",
      "color.nonSemantic.teal.nonSemantic-teal-background-surface": "9fb81c2c87c401a3e543d179260bbfa70ee49ee5",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-content-primary": "d908706f2595466042bc9c59469bf397bb34e596",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-content-secondary": "4a4fce71844df3aadee2df48a790a0735e0997ec",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-border-default": "9d439e90a8427059fc6535fc6869215ccecfd274",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-border-strong": "99233b696d5bfbeccd08bd0bc0453fff99369c7a",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-border-subtle": "8a210628c3b9f4c78f401561f740b5ddfc879dc0",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-background-strong": "4423aeb34035a8d1736aa5d4ee3bac24d813e3a2",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-background-muted": "9005342cd237ad1af7b72394d355868c3e9efc4d",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-background-onSubtle": "f5ba371e8c897daeb8df2826fce29fa241a6a2ca",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-background-subtle": "99d2062dc708f42eb51436b71944d100c7c97032",
      "color.nonSemantic.aquamarine.nonSemantic-aquamarine-background-surface": "d5f17b42fd5a2e25d01246baaa3605078fd2c043",
      "color.nonSemantic.green.nonSemantic-green-content-primary": "53c0d72df153a344d6f54cd958950d01e94a9931",
      "color.nonSemantic.green.nonSemantic-green-content-secondary": "8c046fb4beca3351430d9d240b567c22070fd1e5",
      "color.nonSemantic.green.nonSemantic-green-border-default": "a003644b67d4c2d2d5c0b03749fa071ec4bd7d98",
      "color.nonSemantic.green.nonSemantic-green-border-strong": "285e46b90ff0b1af5fb8a175c040b8ac559e0f91",
      "color.nonSemantic.green.nonSemantic-green-border-subtle": "aecaace49d0ac0923bdea848fa50ad5e7513f962",
      "color.nonSemantic.green.nonSemantic-green-background-strong": "4fecf06d8c9e0bc81a0d618ed9638e2889e2ffa8",
      "color.nonSemantic.green.nonSemantic-green-background-muted": "9e6eb48e3656e4da6f877259a276bcf2dc8459c5",
      "color.nonSemantic.green.nonSemantic-green-background-onSubtle": "c29f3068777fa807bb20a29a57cc6ea0a18c19c1",
      "color.nonSemantic.green.nonSemantic-green-background-subtle": "472a8deb849d3fcc8742def1a7341cb980b1a9f5",
      "color.nonSemantic.green.nonSemantic-green-background-surface": "260dbf3cd482e7037c291f237922352713830e46",
      "color.nonSemantic.orange.nonSemantic-orange-content-primary": "dfd4dcae3b09bd36ebfe6e7264783b02c8a6d5c0",
      "color.nonSemantic.orange.nonSemantic-orange-content-secondary": "e8aa953047021ca35742e2398ed70c05945d1128",
      "color.nonSemantic.orange.nonSemantic-orange-border-default": "d7c20daf3539a825ea99bead757cd2c269418389",
      "color.nonSemantic.orange.nonSemantic-orange-border-strong": "d80caa8d63c8ae0a5eb9bcceced74df4c517c227",
      "color.nonSemantic.orange.nonSemantic-orange-border-subtle": "653651d44a5dc379230e7ea02dc3922b1fb632f7",
      "color.nonSemantic.orange.nonSemantic-orange-background-strong": "a6c9243645e08eab4535ff350e69ab4c5009b89e",
      "color.nonSemantic.orange.nonSemantic-orange-background-muted": "6c4f66d7deecfb852add754ad3072283f829aabc",
      "color.nonSemantic.orange.nonSemantic-orange-background-onSubtle": "7516d157d05ab956538a78aed5cc91b3b0d1e4d5",
      "color.nonSemantic.orange.nonSemantic-orange-background-subtle": "d49e51c20c824455d1cfda4b51e1630dedfd3ddb",
      "color.nonSemantic.orange.nonSemantic-orange-background-surface": "5f2b021f6bab6c1a09925684bb9e0eed2d99626d",
      "borderWidth.border-width-focus": "4ce96440e279d7c9eacefd873a8245504e1371c5"
    },
    "type": "other",
    "value": "[object Object]"
  }
}


const output = {};
const map = {'color': 'colors', 'sizing': 'size', 'spacing': 'space'};
Object.keys(input).forEach(k => {
  
  // if (!map[k]) return;
  output[map[k] || k] = {}
})


console.log(output)


function flatObjectValues(obj) {
  for (const key in obj) {
    // if (k === 'opacity') return;
    if (obj[key].value === undefined) {
      flatObjectValues(obj[key])
    } else {
      const category = map[obj[key].type] || obj[key].type;
      if(output[category] === undefined) {
        output[category] = {}
      }
      // console.log(category)
      // console.log(obj[k])
      // console.log(output[category])
      output[category][key] = obj[key].value;
    }
  }
}

flatObjectValues(input);

var fs = require('fs');
var jsonData = JSON.stringify(output);
fs.writeFile("test.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});