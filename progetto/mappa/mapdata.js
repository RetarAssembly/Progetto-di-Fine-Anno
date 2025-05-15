var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: 500, //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    IT21: {
      name: "Piemonte",
      url: "regione.html?nome=Piemonte"
    },
    IT23: {
      name: "Valle d'Aosta",
      url: "regione.html?nome=Valle d'Aosta"
    },
    IT25: {
      name: "Lombardia",
      url: "regione.html?nome=Lombardia"
    },
    IT32: {
      name: "Trentino-Alto Adige",
      url: "regione.html?nome=Trentino-Alto Adige"
    },
    IT34: {
      name: "Veneto",
      url: "regione.html?nome=Veneto"
    },
    IT36: {
      name: "Friuli Venezia Giulia",
      url: "regione.html?nome=Friuli Venezia Giulia"
    },
    IT42: {
      name: "Liguria",
      url: "regione.html?nome=Liguria"
    },
    IT45: {
      name: "Emilia-Romagna",
      url: "regione.html?nome=Emilia-Romagna"
    },
    IT52: {
      name: "Toscana",
      url: "regione.html?nome=Toscana"
    },
    IT55: {
      name: "Umbria",
      url: "regione.html?nome=Umbria"
    },
    IT57: {
      name: "Marche",
      url: "regione.html?nome=Marche"
    },
    IT62: {
      name: "Lazio",
      url: "regione.html?nome=Lazio"
    },
    IT65: {
      name: "Abruzzo",
      url: "regione.html?nome=Abruzzo"
    },
    IT67: {
      name: "Molise",
      url: "regione.html?nome=Molise"
    },
    IT72: {
      name: "Campania",
      url: "regione.html?nome=Campania"
    },
    IT75: {
      name: "Puglia",
      url: "regione.html?nome=Puglia"
    },
    IT77: {
      name: "Basilicata",
      url: "regione.html?nome=Basilicata"
    },
    IT78: {
      name: "Calabria",
      url: "regione.html?nome=Calabria"
    },
    IT82: {
      name: "Sicilia",
      url: "regione.html?nome=Sicilia"
    },
    IT88: {
      name: "Sardegna",
      url: "regione.html?nome=Sardegna"
    }
  }, 
  locations: {},
  labels: {
    IT21: {
      name: "Piemonte",
      parent_id: "IT21"
    },
    IT23: {
      name: "Valle d'Aosta",
      parent_id: "IT23"
    },
    IT25: {
      name: "Lombardia",
      parent_id: "IT25"
    },
    IT32: {
      name: "Trentino-Alto Adige",
      parent_id: "IT32"
    },
    IT34: {
      name: "Veneto",
      parent_id: "IT34"
    },
    IT36: {
      name: "Friuli Venezia Giulia",
      parent_id: "IT36"
    },
    IT42: {
      name: "Liguria",
      parent_id: "IT42"
    },
    IT45: {
      name: "Emilia-Romagna",
      parent_id: "IT45"
    },
    IT52: {
      name: "Toscana",
      parent_id: "IT52"
    },
    IT55: {
      name: "Umbria",
      parent_id: "IT55"
    },
    IT57: {
      name: "Marche",
      parent_id: "IT57"
    },
    IT62: {
      name: "Lazio",
      parent_id: "IT62"
    },
    IT65: {
      name: "Abruzzo",
      parent_id: "IT65"
    },
    IT67: {
      name: "Molise",
      parent_id: "IT67"
    },
    IT72: {
      name: "Campania",
      parent_id: "IT72"
    },
    IT75: {
      name: "Puglia",
      parent_id: "IT75"
    },
    IT77: {
      name: "Basilicata",
      parent_id: "IT77"
    },
    IT78: {
      name: "Calabria",
      parent_id: "IT78"
    },
    IT82: {
      name: "Sicilia",
      parent_id: "IT82"
    },
    IT88: {
      name: "Sardegna",
      parent_id: "IT88"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};
