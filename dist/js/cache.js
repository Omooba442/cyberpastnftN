async function getNFT() {
  let contract = localStorage.getItem("contract");
  let identifier = localStorage.getItem("identifier");

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("x-api-key", "c9d0fa393e4042a489f83feceb155e25");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://api.opensea.io/api/v2/chain/matic/contract/${contract}/nfts/${identifier}`,
      requestOptions
    );
    let result = await response.json();
    console.table(result.nft);

    result = result.nft;

    document.querySelector(".banner-nft-img").src = result.image_url;
    document.querySelector(".banner-nft-img").style.width = "100%";
    document.querySelector(".banner-nft-img").style.objectFit = "cover";
    document.querySelector(".banner-nft-img").style.filter = "blur(10px)";

    document.querySelector(".avatar-nft-img").src = result.image_url;
    document.querySelector(".avatar-nft-img").style.width = "100px";

    document.querySelector(".nft-name").textContent = result.name;
    document.querySelector(".nft-user").textContent = result.collection;

    document.querySelector(".nft-description").textContent = result.description;

    document.querySelector("#buy-nft-link").href = result.opensea_url;
  } catch (error) {
    console.error(error);
  }
}

getNFT();
