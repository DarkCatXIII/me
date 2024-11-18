fetch("data/data.json")
  .then((response) => response.json())
  .then((data) => {
    for (const element of data) {
        const app = element;
        let c = `
          <div class="col-6">
            <div class="row">
              <img src="${app.logo}" alt="app logo" class="col-2" />
              <h2><a href="${app.app_link}">${app.title}</a></h2>
            </div>
            <h8
             class="red">(${app.skils})</h8>
            <p>${app.details}</p>
          </div>
        `;
        $("#project_list").append(c);
      }
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });
