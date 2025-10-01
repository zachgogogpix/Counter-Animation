const createOdometer = (el, value) => {
  const odometer = new Odometer({
    el: el,
    value: 0,
  });

  let hasRun = false;

  const options = {
    threshold: [0, 0.9],
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!hasRun) {
          odometer.update(value);
          hasRun = true;
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(el);
};

const videoOdometer = document.querySelector(".video-odometer");
createOdometer(videoOdometer, 117274);

const ingestOdometer = document.querySelector(".ingest-odometer");
createOdometer(ingestOdometer, 58411);

const hourOdometer = document.querySelector(".hour-odometer");
createOdometer(hourOdometer, 7677);
