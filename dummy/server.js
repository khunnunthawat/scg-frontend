const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/product", (req, res) => {
  res.json([
    {
      id: 1,
      title: "NMD_R1 : Clound White",
      price: 4600,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/252cf61f216a43f9ac06ab6501282a3b_9366/NMD_R1_FV8727_01_standard.jpg"
    },
    {
      id: 2,
      title: "NMD_R1 : Spectoo",
      price: 5000,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/11baeaec497f444cb847ac770180215e_9366/NMD_R1_Spectoo_FZ3209_01_standard.jpg"
    },
    {
      id: 3,
      title: "NMD_R1 : True Pink",
      price: 4600,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/377621c5b01c410e9905ac6a0171461c_9366/NMD_R1_FZ3777_01_standard.jpg"
    },
    {
      id: 4,
      title: "Superstar : Core Black",
      price: 3200,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7ed0855435194229a525aad6009a0497_9366/Superstar_EG4958_01_standard.jpg"
    },
    {
      id: 5,
      title: "Superstar : Core White",
      price: 4000,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/04c44a623b534f5887c9abfb00ec4569_9366/SUPERSTAR_GZ8839_01_standard.jpg"
    },
    {
      id: 6,
      title: "Superstar : Core White",
      price: 3200,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/fe33c3e6b19b4286bcb9ab59010d9c3d_9366/Superstar_FW7052_01_standard.jpg"
    },
    {
      id: 7,
      title: "Ultraboost 21 : Core White",
      price: 6500,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/429a510e09fe4039ba33ac770135d8be_9366/Ultraboost_21_FY0377_01_standard.jpg"
    },
    {
      id: 8,
      title: "Ultraboost 1 : DNA",
      price: 6500,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/cdc1b857ece14be9bed8abfd01701c50_9366/Ultraboost_1_DNA_H68156_01_standard.jpg"
    },
    {
      id: 9,
      title: "Ultraboost 5.0 : DNA",
      price: 6000,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ec7eeee67c2b487d8e55ac9201261ada_9366/ULTRABOOST_5.0_DNA_GW7659_01_standard.jpg"
    },
    {
      id: 10,
      title: "Niteball",
      price: 2800,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/90c4c1d9b53f46958c85aca0017a5e69_9366/Niteball_FW2477_01_standard.jpg"
    },
    {
      id: 11,
      title: "ZX 1K Boost",
      price: 3400,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4811a18977b545b68e9dac7500f45896_9366/ZX_1K_Boost_H69037_01_standard.jpg"
    },
    {
      id: 12,
      title: "X9000L4 Cyberpunk",
      price: 4800,
      imgUrl:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/2fec73be4b024c36b248abd60082b723_9366/X9000L4_CYBERPUNK_2077_FY3143_01_standard.jpg"
    }
  ]);
});

app.listen(4000, () => {
  console.log("Server is running...");
});
