export default function Features() {
  // LOGIC HERE

  return (
    <section className="features_container">
      <div className="container ">
        <ul className="unstyled-list">
          <li className="d-flex">
            <div className="img_container">
              <img src="/buy-comics-digital-comics.png" alt="" />
            </div>
            <span>digital comics</span>
          </li>
          <li className="d-flex">
            <div className="img_container">
              <img src="/buy-comics-merchandise.png" alt="" />
            </div>
            <span>dc merchandise</span>
          </li>
          <li className="d-flex">
            <div className="img_container">
              <img src="/buy-comics-subscriptions.png" alt="" />
            </div>
            <span>subscription</span>
          </li>
          <li className="d-flex">
            <div className="img_container">
              <img src="/buy-comics-shop-locator.png" alt="" />
            </div>
            <span>comic shop locator</span>
          </li>
          <li className="d-flex">
            <div className="img_container">
              <img src="/buy-dc-power-visa.svg" alt="" />
            </div>
            <span>dc power visa</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
