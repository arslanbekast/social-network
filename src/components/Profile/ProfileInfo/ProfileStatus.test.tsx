import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={()=>{}}/>);
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance?.state.status).toBe("it-kamasutra.com")
    })

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={()=>{}}/>);
        const root = component.root
        const span = root.findByType("span")
        // @ts-ignore
        expect(span).not.toBeNull()
    })

    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={()=>{}}/>);
        const root = component.root
        // @ts-ignore
        expect(() => root.findByType("input")).toThrow()
    })

    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={()=>{}}/>);
        const root = component.root
        const span = root.findByType("span")
        // @ts-ignore
        expect(span.children[0]).toBe("it-kamasutra.com")
    })

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={()=>{}}/>);
        const root = component.root
        const span = root.findByType("span")
        span.props.onDoubleClick()
        const input = root.findByType("input")
        expect(input.props.value).toBe("it-kamasutra.com")
    })

    test("callback should be callled", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback}/>);
        const instance = component.getInstance()
        // @ts-ignore
        instance?.deActivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})