import TertiaryButton from "../atoms/Buttons/TertiaryButton";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";

interface NormalInputProps{
    routeBack: ()=>void,
    routeSaveExit: ()=>void,
    routeContinue: ()=>void,
    testId: string
}


export default function NavigationButtons({routeBack, routeSaveExit, routeContinue, testId}:NormalInputProps){
    return(
        <>
            <TertiaryButton label="Back" disableCondition={false} onClick={routeBack} testId="testID"/>
            <TertiaryButton label="Save and Exit" disableCondition={false} onClick={routeSaveExit} testId="testID"/>
            <PrimaryButton label="Continue" disableCondition={false} onClick={routeContinue} testId="testID"/>
        </>
    );
}
