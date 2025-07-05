document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('premadecloaks');
  const favicon = document.getElementById('icon');
  const pageTitle = document.title;

  const themes = {
    billibilli: {
      favicon: '/img/cloaks/bb.png',
      title: 'Billibilli'
    },
    calendar: {
      favicon: '/img/cloaks/calendar.png',
      title: 'Google Calendar'
    },
    canvas: {
      favicon: '/img/cloaks/canvas.png',
      title: 'Canvas'
    },
    deltamath: {
      favicon: '/img/cloaks/deltamath.png',
      title: 'DeltaMath Student Application'
    },
    edpuzzle: {
      favicon: '/img/cloaks/edpuzzle.png',
      title: 'Edpuzzle'
    },
    classroom: {
      favicon: '/img/cloaks/gclassroom.png',
      title: 'Home'
    },
    drive: {
      favicon: '/img/cloaks/gdrive.png',
      title: 'My Drive'
    },
    gmail: {
      favicon: '/img/cloaks/gmail.png',
      title: 'Gmail'
    },
    itchio: {
      favicon: '/img/cloaks/itch.png',
      title: 'Download the latest indie games - itch.io'
    },
    khan: {
      favicon: '/img/cloaks/khan.png',
      title: 'Dashboard | Khan Academy'
    },
    meet: {
      favicon: '/img/cloaks/meet.png',
      title: 'Google Meet'
    },
    search: {
      favicon: '/img/cloaks/gsearch.png',
      title: 'Google'
    },
    wiki: {
      favicon: '/img/cloaks/wiki.png',
      title: 'Wikipedia, the free encyclopedia'
    },
    zoom: {
      favicon: '/img/cloaks/zoom.png',
      title: 'Zoom'
    } 
  };

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function applyTheme(themeKey) {
    const theme = themes[themeKey];
    if (!theme) return;

    document.title = theme.title;
    favicon.href = theme.favicon;
  }

  const savedTheme = getCookie('selectedTheme');
  if (savedTheme && themes[savedTheme]) {
    dropdown.value = savedTheme;
    applyTheme(savedTheme);
  } else {
    applyTheme(dropdown.value);
  }

  dropdown.addEventListener('change', function() {
    const selectedTheme = this.value;
    setCookie('selectedTheme', selectedTheme, 9999);
    applyTheme(selectedTheme);
  });
});

document.addEventListener("keydown", function (e) {
    if (e.key === `${panicKey}`) {
      window.location.href = `${panicLink}`;
    }
});

function setPanicKey() {
  const key = document.getElementById("key").value;
  localStorage.setItem("panicKey", key);
  console.log(localStorage.getItem("panicKey"));
}

function setPanicLink() {
  var link = document.getElementById("link").value;
  localStorage.setItem("PanicLink", link);
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("key").value = panicKey;
  document.getElementById("link").value = panicLink;
  cloakElement = document.getElementById("premadecloaks");

  const toggle = document.getElementById("abtToggle");
  if (toggled === "true") {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }
  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      localStorage.setItem("aboutBlank", "true");
      toggle.checked = true;
    } else {
      localStorage.setItem("aboutBlank", "false");
      toggle.checked = false;
    }
  });
});

function cloak() {
  let inFrame;

  try {
    inFrame = window !== top;
  } catch (e) {
    inFrame = true;
  }

  if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank");
    if (!popup || popup.closed) {
      alert("Please allow popups and redirects.");
    } else {
      const doc = popup.document;
      const iframe = doc.createElement("iframe");
      const style = iframe.style;
      const link = doc.createElement("link");

      const name = tabData.title || "Google";
      const icon = tabData.icon || "/img/favicon.ico";

      doc.title = name;
      link.rel = "icon";
      link.href = icon;

      iframe.src = location.href;
      style.position = "fixed";
      style.top = style.bottom = style.left = style.right = 0;
      style.border = style.outline = "none";
      style.width = style.height = "100%";

      doc.head.appendChild(link);
      doc.body.appendChild(iframe);

      const pLink =
        localStorage.getItem(encodeURI("pLink")) || "https://google.com";
      location.replace(pLink);

      const script = doc.createElement("script");
      script.textContent = `
        window.onbeforeunload = function (event) {
          const confirmationMessage = 'Leave Site?';
          (event || window.event).returnValue = confirmationMessage;
          return confirmationMessage;
        };
      `;
      doc.head.appendChild(script);
    }
  }
}

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function convertDate(date_str) {
  temp_date = date_str.split("-");
  return (
    temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0]
  );
}

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function convertDate(date_str) {
  temp_date = date_str.split("-");
  return (
    months[Number(temp_date[1]) - 1] + " " + temp_date[2] + ", " + temp_date[0]
  );
}

Promise.all([
    fetch('https://api.github.com/repos/useclassplay/useclassplay/commits'),
    fetch('https://api.github.com/repos/useclassplay/useclassplay/releases/latest')
  ])
    .then(([commitsResponse, releasesResponse]) => {
      return Promise.all([commitsResponse.json(), releasesResponse.json()])
    })
    .then(([commitsData, releasesData]) => {
      var unformatted = new Date(commitsData[0].commit.author.date)
        .toISOString()
        .split('T')[0];
      var lastCommitDate = convertDate(unformatted);
      document.querySelector('#updated').textContent = `Last Updated: ${lastCommitDate}`;
      
      document.querySelector('#version').textContent = releasesData.tag_name || 'No release tag';
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

setFavicon(localStorage.getItem("cloak"));