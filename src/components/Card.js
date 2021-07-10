import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({icon, title, num}) => {
    
    let check = '✅';
    let X = '❎';
    let sign1 = "";
    let sign2 = "";
    let sign3 = "";
    let sign4 = "";


switch(num) {
  case 1:
    sign1 = check;
    sign2 = X;
    sign3 = X;
    sign4 = X;
    break;
  case 2:
    sign1 = check;
    sign2 = check;
    sign3 = X;
    sign4 = X;
    break;
  case 3:
    sign1 = check;
    sign2 = check;
    sign3 = check;
    sign4 = check;
    break;
  default:
}

    return (
        <div className="card container">
            <div className="card-grid">
                    <h1>{title}</h1>
                    <FontAwesomeIcon size="3x"icon={icon}/>
                    <ul>
                    <li>{sign1}No consetetur sed lorem ipsum.</li>
                    <li>{sign2}No consetetur sed lorem ipsum.</li>
                    <li>{sign3}No consetetur sed lorem ipsum.</li>
                    <li>{sign4} No consetetur sed lorem ipsum.</li>
                    </ul>
                    <a className="btn btn-primary">Button</a>
            </div>
       </div>
    )
}

export default Card;