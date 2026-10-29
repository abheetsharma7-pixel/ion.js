if (!categoryIndexes.hasOwnProperty("ions")) {
    categoryIndexes.ions = Object.keys(categoryIndexes).length;
}

elements.lithium_ion = {
    color: "#e67e22",
    behavior: behaviors.POWDER,
    category: "ions",
    state: "solid",
    density: 534,
    conduct: 0.85,
    fireColor: "#e74c3c",
    reactions: {
        "water": { elem1: null, elem2: "hydrogen", chance: 0.1 }
    }
};

elements.zinc_ion = {
    color: "#2ecc71", 
    behavior: behaviors.POWDER,
    category: "ions",
    state: "solid",
    density: 7140,
    conduct: 0.70
};

elements.calcium_ion = {
    color: "#f1c40f",
    behavior: behaviors.POWDER,
    category: "ions",
    state: "solid",
    density: 1540,
    conduct: 0.60
};

elements.magnesium_ion = {
    color: "#e74c3c",
    behavior: behaviors.POWDER,
    category: "ions",
    state: "solid",
    density: 1738,
    conduct: 0.75,
    fireColor: "#ffffff"
};

elements.sodium_ion = {
    color: "#f39c12",
    behavior: behaviors.POWDER,
    category: "ions",
    state: "solid",
    density: 968,
    conduct: 0.80,
    reactions: {
        "water": { elem1: null, elem2: "fire", chance: 0.2 }
    }
};

elements.potassium_ion = {
    color: "#9b59b6",
    behavior: behaviors.POWDER,
    category: "ions",
    state: "solid",
    density: 862,
    conduct: 0.90,
    reactions: {
        "water": { elem1: "explosion", elem2: "fire", chance: 0.3 }
    }
};

console.log("Solid Ions Mod Successfully Loaded!");

