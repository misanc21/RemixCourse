import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New hola App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", color:"pink" }}>
      <h1>Hola mi amor te amoooo</h1>
      <img style={{width:"300px"}}
      src="https://scontent.fmex30-1.fna.fbcdn.net/v/t39.30808-6/329641862_760365971691365_4961624719908095621_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEoU4JZsyUqSXrweU_RTFHH__-1W0yb-B7__7VbTJv4HmuThkrdbh5vzZF5VCOjLRmzKHBjoYzQw2CUJYIUtsd6&_nc_ohc=ly06DYPEHjQAX9bnBV4&_nc_ht=scontent.fmex30-1.fna&oh=00_AfBSZnhOMvtRl2XWy2DhbLCDere05Oy-NqE5YMTClk4PkQ&oe=649D08EE" alt="" />
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/photo/?fbid=5546626688716474&set=a.134160813296449"
            rel="noreferrer"
          >
            Da click para ver otra foto con mi amorcito holaaa
          </a>
        </li>
      </ul>
    </div>
  );
}
