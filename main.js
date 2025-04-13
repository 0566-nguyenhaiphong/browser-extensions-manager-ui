const listItem = document.getElementsByClassName("list-item")[0];
const data = async () => {
  const response = await fetch("data.json");
  const json = await response.json();
  return json;
};

const renderList = async () => {
  const result = await data();
  const list = result
    .map((item) => {
      return `
            <div class="item">
                <div class="item-info">
                    <div class="item-img">
                        <img src="${item.logo}" alt="item" class="img" />
                    </div>
                    <div class="item-content">
                        <h2 class="item-name">${item.name}</h2>
                        <p class="item-des">
                            ${item.description}
                        </p>
                    </div>
                </div>
                <div class="item-action">
                    <button class="remove" type="button">Remove</button>
                    ${
                      item.isActive
                        ? `
                        <div class="item-status active" onclick="Switch(this)">
                          <div class="switch on"></div>
                        </div>`
                        : `
                        <div class="item-status inactive" onclick="Switch(this)">
                          <div class="switch off"></div>
                        </div>`
                    }    
                </div>
            </div>
        `;
    })
    .join("");

  listItem.innerHTML = list;
};

renderList();

const Switch = (itemStatus) => {
  itemStatus.classList.toggle("active");
  itemStatus.classList.toggle("inactive");

  const switchBtn = itemStatus.querySelector(".switch");
  switchBtn.classList.toggle("on");
  switchBtn.classList.toggle("off");
};
const Select = (btn) => {
  const allBtn = document.querySelectorAll(".list-status .btn");

  allBtn.forEach((button) => {
    button.classList.remove("selected");
  });

  btn.classList.add("selected");
};
const ActiveList = async () => {
  const result = await data();
  const activeList = result.filter((item) => item.isActive === true);
  listItem.innerHTML = activeList
    .map((item) => {
      return `
        <div class="item">
            <div class="item-info">
                <div class="item-img">
                    <img src="${item.logo}" alt="item" class="img" />
                </div>
                <div class="item-content">
                    <h2 class="item-name">${item.name}</h2>
                    <p class="item-des">
                        ${item.description}
                    </p>
                </div>
            </div>
            <div class="item-action">
                <button class="remove" type="button">Remove</button>
                <div class="item-status active" onclick="Switch(this)">
                    <div class="switch on"></div>
                </div>
            </div>
        </div>
    `;
    })
    .join("");
};

const InactiveList = async () => {
  const result = await data();
  const activeList = result.filter((item) => item.isActive === false);
  listItem.innerHTML = activeList
    .map((item) => {
      return `
        <div class="item">
            <div class="item-info">
                <div class="item-img">
                    <img src="${item.logo}" alt="item" class="img" />
                </div>
                <div class="item-content">
                    <h2 class="item-name">${item.name}</h2>
                    <p class="item-des">
                        ${item.description}
                    </p>
                </div>
            </div>
            <div class="item-action">
                <button class="remove" type="button">Remove</button>
                <div class="item-status inactive" onclick="Switch(this)">
                    <div class="switch off"></div>
                </div>
            </div>
        </div>
    `;
    })
    .join("");
};

const changeTheme = (theme) => {
  const body = document.body;
  body.classList.toggle("dark");
  body.classList.toggle("light");
  theme.classList.toggle("dark");
  theme.classList.toggle("light");
};
