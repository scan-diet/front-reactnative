import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";

interface IProfileProps {
    user : any
}
class Profile extends React.Component <IProfileProps> {
    constructor(props: IProfileProps) {
        super(props);

    }
    render() {
        const { user: currentUser } = this.props;
        return (
            <View style={styles.main_container}>
                <div style={{display: "flex",justifyContent:"space-around",margin:"18px 0px"}}>
                    <div>
                        <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src ="../../assets/images/image_profil.png"/>
                    </div>
                    <div>
                        <h4>{currentUser.email}</h4>
                        <div>
                            <h5>Weight : </h5>
                            <h5>Height : </h5>
                            <h5>WeightGoal : </h5>
                        </div>
                        <div>
                            <h5> Lactose </h5>
                        </div>
                    </div>
                </div>
            </View>
        )
    }
}
function mapStateToProps(state: any) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Profile);
const styles = StyleSheet.create({
    main_container: {
        padding: 50
    }
})
