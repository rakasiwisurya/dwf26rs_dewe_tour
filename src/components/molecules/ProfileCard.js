import { InputFileAvatar } from "components/atoms";

import IconName from "assets/icons/profile-name.svg";
import IconMail from "assets/icons/profile-mail.svg";
import IconPhone from "assets/icons/profile-phone.svg";
import IconPlace from "assets/icons/profile-place.svg";

export default function ProfileCard({ stateAuth }) {
  return (
    <section className="profile-card mb-5">
      <div className="container">
        <div className="card p-3 mx-auto" style={{ width: 785 }}>
          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <h1 className="h3 fw-bold mb-5">Personal info</h1>
                <div className="d-flex mb-4">
                  <img src={IconName} alt="Icon User" className="mx-1" />
                  <div>
                    <div className="fw-bold" style={{ fontSize: 13 }}>
                      {stateAuth.user.fullname}
                    </div>
                    <div className="text-muted" style={{ fontSize: 11 }}>
                      Full name
                    </div>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <img src={IconMail} alt="Icon Mail" className="mx-1" />
                  <div>
                    <div className="fw-bold" style={{ fontSize: 13 }}>
                      {stateAuth.user.email}
                    </div>
                    <div className="text-muted" style={{ fontSize: 11 }}>
                      Email
                    </div>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <img src={IconPhone} alt="Icon Phone" className="mx-1" />
                  <div>
                    <div className="fw-bold" style={{ fontSize: 13 }}>
                      {stateAuth.user.phone}
                    </div>
                    <div className="text-muted" style={{ fontSize: 11 }}>
                      Mobile phone
                    </div>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <img src={IconPlace} alt="Icon Place" className="mx-1" />
                  <div>
                    <div className="fw-bold" style={{ fontSize: 13 }}>
                      {stateAuth.user.address}
                    </div>
                    <div className="text-muted" style={{ fontSize: 11 }}>
                      Address
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <InputFileAvatar
                  userId={stateAuth.user.id}
                  avatar={stateAuth.user.avatar}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
