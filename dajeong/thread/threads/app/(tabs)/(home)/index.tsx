import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

export default function Index() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const isLoggedIn = false;

  console.log("pathname:",pathname);

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
    <BlurView style={styles.header} intensity={70}>
      <Image 
        source={require("../../../assets/images/react-logo.png")} 
        style={styles.headerLogo}
      />
      {!isLoggedIn && (
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.navigate(`/login`)}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      )}
    </BlurView>
    {isLoggedIn && (
        <View style={styles.tabContainer}>
          <View style={styles.tab}>
            <TouchableOpacity onPress={() => router.navigate(`/`)}>
              <Text style = {{ color : pathname === "/" ? "red" : "black"}}>
                For you
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => router.navigate(`/following`)}>
              <Text style = {{ color : pathname === "/" ? "black" : "red"}}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    )}
      <View>
        <TouchableOpacity onPress={() => router.push(`/@kumquatree/post/1`)}>
          <Text>게시글1</Text>
        </TouchableOpacity>
      </View>
            <View>
        <TouchableOpacity onPress={() => router.push(`/@kumquatree/post/2`)}>
          <Text>게시글2</Text>
        </TouchableOpacity>
      </View>
            <View>
        <TouchableOpacity onPress={() => router.push(`/@kumquatree/post/3`)}>
          <Text>게시글3</Text>
        </TouchableOpacity>
      </View>
      </View>    
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  tabContainer : {
    flexDirection : "row",
  },
  tab : {
    flex: 1,
    alignItems : "center",
  },
  header : {
    alignItems : "center",
  },
  headerLogo: {
    width: 42,
    height: 42,
  },
  loginButton : {
    position : "absolute",
    right : 20,
    top : 0,
    backgroundColor: "black",
    color: "white",
    borderWidth : 1,
    borderColor: "black",
    borderRadius : 10,
    padding: 10,
    paddingHorizontal : 20,
    paddingVertical: 10,
  },
  loginButtonText : {
    color : "white",
  },
});