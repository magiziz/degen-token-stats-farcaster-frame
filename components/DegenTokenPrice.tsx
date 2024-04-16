/** @jsxImportSource frog/jsx */
import { formatter, formatterNum } from "@/lib/formatter";
import { CSSProperties } from "hono/jsx";
import dayjs from "dayjs";

const backgroundStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  color: "white",
  padding: "20px 42px",
  background: "#0F172A",
};

function DegenLogo() {
  return (
    <svg
      width="1361"
      height="1360"
      viewBox="0 0 1361 1360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "300px", width: "300px" }}
    >
      <g clip-path="url(#clip0_280_1139)">
        <circle cx="680.832" cy="680" r="680" fill="#A36EFD" />
        <path
          d="M924.171 356.543C865.542 349.809 826.447 346.441 682.255 346.441C558.546 346.441 498.252 350.923 440.339 356.543C413.267 359.167 391.674 379.766 393.662 407.006L425.682 843.195L682.232 935.133L938.805 843.195L970.825 407.006C972.836 379.766 951.174 359.655 924.148 356.543H924.171Z"
          fill="#4C2897"
        />
        <path
          d="M1004.37 733.314C1004.37 733.314 949.695 766.15 929.905 773.675C870.444 796.316 682.279 831.986 682.279 831.986C682.279 831.986 494.092 796.34 434.653 773.675C414.863 766.127 360.187 733.314 360.187 733.314C326.11 714.852 288.079 741.372 288.01 780.27C287.894 843.226 337.068 907.878 403.396 948.633C478.186 994.59 589.827 1013.66 682.279 1013.66C774.731 1013.66 886.372 994.59 961.162 948.633C1027.49 907.878 1076.66 843.203 1076.55 780.27C1076.48 741.372 1038.45 714.852 1004.37 733.314Z"
          fill="#4C2897"
        />
        <path
          d="M950.641 700.792C908.519 712.682 842.838 745.728 682.255 745.728C521.671 745.728 455.99 712.682 413.868 700.792C406.793 698.795 399.881 704.368 400.274 711.753L405.984 815.767C406.192 819.715 407.672 823.43 410.169 826.473C427.623 847.605 505.881 921.337 682.231 921.337C858.582 921.337 935.892 848.557 953.994 826.867C956.722 823.593 958.294 819.529 958.548 815.256L964.235 711.753C964.652 704.392 957.716 698.795 950.641 700.792Z"
          fill="#A36EFD"
        />
      </g>
      <defs>
        <clipPath id="clip0_280_1139">
          <rect
            width="1360"
            height="1360"
            fill="white"
            transform="translate(0.832031)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function DegenStats({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <h2
        style={{
          textAlign: "left",
          width: "100%",
          color: "rgb(155, 155, 155)",
        }}
      >
        {title}
      </h2>

      <h1
        style={{
          textAlign: "left",
          width: "100%",
          color: "#fff",
          lineHeight: "20px",
          fontSize: "32px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export function DegenTokenPrice({
  tokenPriceUsd,
  volumeUsd,
  lastUpdatedAt,
}: {
  tokenPriceUsd: number;
  volumeUsd: number;
  lastUpdatedAt: number;
}) {
  const dateUpdated = dayjs.unix(lastUpdatedAt);
  const now = dayjs();
  const minutesDifference = now.diff(dateUpdated, "minutes");

  return (
    <div style={backgroundStyle}>
      <DegenLogo />

      <h1
        style={{
          textAlign: "left",
          width: "100%",
          color: "#fff",
          marginTop: "32px",
          fontSize: "36px",
        }}
      >
        Stats
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <DegenStats
          title="Token price (USD)"
          value={formatter(tokenPriceUsd)}
        />
        <DegenStats title="Volume 24hr (USD)" value={formatter(volumeUsd)} />
        <DegenStats
          title="Last updated"
          value={`${formatterNum(minutesDifference)} minutes ago`}
        />
      </div>
    </div>
  );
}