// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,long_type_string,client_grpc1
// @generated from protobuf file "authzed/api/v1/debug.proto" (package "authzed.api.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { PartialCaveatInfo } from "./core";
import { Struct } from "../../../google/protobuf/struct";
import { Duration } from "../../../google/protobuf/duration";
import { SubjectReference } from "./core";
import { ObjectReference } from "./core";
/**
 * DebugInformation defines debug information returned by an API call in a footer when
 * requested with a specific debugging header.
 *
 * The specific debug information returned will depend on the type of the API call made.
 *
 * See the github.com/authzed/authzed-go project for the specific header and footer names.
 *
 * @generated from protobuf message authzed.api.v1.DebugInformation
 */
export interface DebugInformation {
    /**
     * check holds debug information about a check request.
     *
     * @generated from protobuf field: authzed.api.v1.CheckDebugTrace check = 1;
     */
    check?: CheckDebugTrace;
    /**
     * schema_used holds the schema used for the request.
     *
     * @generated from protobuf field: string schema_used = 2;
     */
    schemaUsed: string;
}
/**
 * CheckDebugTrace is a recursive trace of the requests made for resolving a CheckPermission
 * API call.
 *
 * @generated from protobuf message authzed.api.v1.CheckDebugTrace
 */
export interface CheckDebugTrace {
    /**
     * resource holds the resource on which the Check was performed.
     *
     * @generated from protobuf field: authzed.api.v1.ObjectReference resource = 1;
     */
    resource?: ObjectReference;
    /**
     * permission holds the name of the permission or relation on which the Check was performed.
     *
     * @generated from protobuf field: string permission = 2;
     */
    permission: string;
    /**
     * permission_type holds information indicating whether it was a permission or relation.
     *
     * @generated from protobuf field: authzed.api.v1.CheckDebugTrace.PermissionType permission_type = 3;
     */
    permissionType: CheckDebugTrace_PermissionType;
    /**
     * subject holds the subject on which the Check was performed. This will be static across all calls within
     * the same Check tree.
     *
     * @generated from protobuf field: authzed.api.v1.SubjectReference subject = 4;
     */
    subject?: SubjectReference;
    /**
     * result holds the result of the Check call.
     *
     * @generated from protobuf field: authzed.api.v1.CheckDebugTrace.Permissionship result = 5;
     */
    result: CheckDebugTrace_Permissionship;
    /**
     * caveat_evaluation_info holds information about the caveat evaluated for this step of the trace.
     *
     * @generated from protobuf field: authzed.api.v1.CaveatEvalInfo caveat_evaluation_info = 8;
     */
    caveatEvaluationInfo?: CaveatEvalInfo;
    /**
     * duration holds the time spent executing this Check operation.
     *
     * @generated from protobuf field: google.protobuf.Duration duration = 9;
     */
    duration?: Duration;
    /**
     * @generated from protobuf oneof: resolution
     */
    resolution: {
        oneofKind: "wasCachedResult";
        /**
         * was_cached_result, if true, indicates that the result was found in the cache and returned directly.
         *
         * @generated from protobuf field: bool was_cached_result = 6;
         */
        wasCachedResult: boolean;
    } | {
        oneofKind: "subProblems";
        /**
         * sub_problems holds the sub problems that were executed to resolve the answer to this Check. An empty list
         * and a permissionship of PERMISSIONSHIP_HAS_PERMISSION indicates the subject was found within this relation.
         *
         * @generated from protobuf field: authzed.api.v1.CheckDebugTrace.SubProblems sub_problems = 7;
         */
        subProblems: CheckDebugTrace_SubProblems;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message authzed.api.v1.CheckDebugTrace.SubProblems
 */
export interface CheckDebugTrace_SubProblems {
    /**
     * @generated from protobuf field: repeated authzed.api.v1.CheckDebugTrace traces = 1;
     */
    traces: CheckDebugTrace[];
}
/**
 * @generated from protobuf enum authzed.api.v1.CheckDebugTrace.PermissionType
 */
export enum CheckDebugTrace_PermissionType {
    /**
     * @generated from protobuf enum value: PERMISSION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: PERMISSION_TYPE_RELATION = 1;
     */
    RELATION = 1,
    /**
     * @generated from protobuf enum value: PERMISSION_TYPE_PERMISSION = 2;
     */
    PERMISSION = 2
}
/**
 * @generated from protobuf enum authzed.api.v1.CheckDebugTrace.Permissionship
 */
export enum CheckDebugTrace_Permissionship {
    /**
     * @generated from protobuf enum value: PERMISSIONSHIP_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: PERMISSIONSHIP_NO_PERMISSION = 1;
     */
    NO_PERMISSION = 1,
    /**
     * @generated from protobuf enum value: PERMISSIONSHIP_HAS_PERMISSION = 2;
     */
    HAS_PERMISSION = 2,
    /**
     * @generated from protobuf enum value: PERMISSIONSHIP_CONDITIONAL_PERMISSION = 3;
     */
    CONDITIONAL_PERMISSION = 3
}
/**
 * CaveatEvalInfo holds information about a caveat expression that was evaluated.
 *
 * @generated from protobuf message authzed.api.v1.CaveatEvalInfo
 */
export interface CaveatEvalInfo {
    /**
     * expression is the expression that was evaluated.
     *
     * @generated from protobuf field: string expression = 1;
     */
    expression: string;
    /**
     * result is the result of the evaluation.
     *
     * @generated from protobuf field: authzed.api.v1.CaveatEvalInfo.Result result = 2;
     */
    result: CaveatEvalInfo_Result;
    /**
     * context consists of any named values that were used for evaluating the caveat expression.
     *
     * @generated from protobuf field: google.protobuf.Struct context = 3;
     */
    context?: Struct;
    /**
     * partial_caveat_info holds information of a partially-evaluated caveated response, if applicable.
     *
     * @generated from protobuf field: authzed.api.v1.PartialCaveatInfo partial_caveat_info = 4;
     */
    partialCaveatInfo?: PartialCaveatInfo;
    /**
     * caveat_name is the name of the caveat that was executed, if applicable.
     *
     * @generated from protobuf field: string caveat_name = 5;
     */
    caveatName: string;
}
/**
 * @generated from protobuf enum authzed.api.v1.CaveatEvalInfo.Result
 */
export enum CaveatEvalInfo_Result {
    /**
     * @generated from protobuf enum value: RESULT_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: RESULT_UNEVALUATED = 1;
     */
    UNEVALUATED = 1,
    /**
     * @generated from protobuf enum value: RESULT_FALSE = 2;
     */
    FALSE = 2,
    /**
     * @generated from protobuf enum value: RESULT_TRUE = 3;
     */
    TRUE = 3,
    /**
     * @generated from protobuf enum value: RESULT_MISSING_SOME_CONTEXT = 4;
     */
    MISSING_SOME_CONTEXT = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class DebugInformation$Type extends MessageType<DebugInformation> {
    constructor() {
        super("authzed.api.v1.DebugInformation", [
            { no: 1, name: "check", kind: "message", T: () => CheckDebugTrace },
            { no: 2, name: "schema_used", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<DebugInformation>): DebugInformation {
        const message = { schemaUsed: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DebugInformation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DebugInformation): DebugInformation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* authzed.api.v1.CheckDebugTrace check */ 1:
                    message.check = CheckDebugTrace.internalBinaryRead(reader, reader.uint32(), options, message.check);
                    break;
                case /* string schema_used */ 2:
                    message.schemaUsed = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DebugInformation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* authzed.api.v1.CheckDebugTrace check = 1; */
        if (message.check)
            CheckDebugTrace.internalBinaryWrite(message.check, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string schema_used = 2; */
        if (message.schemaUsed !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.schemaUsed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.DebugInformation
 */
export const DebugInformation = new DebugInformation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckDebugTrace$Type extends MessageType<CheckDebugTrace> {
    constructor() {
        super("authzed.api.v1.CheckDebugTrace", [
            { no: 1, name: "resource", kind: "message", T: () => ObjectReference, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "permission", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "permission_type", kind: "enum", T: () => ["authzed.api.v1.CheckDebugTrace.PermissionType", CheckDebugTrace_PermissionType, "PERMISSION_TYPE_"], options: { "validate.rules": { enum: { definedOnly: true, notIn: [0] } } } },
            { no: 4, name: "subject", kind: "message", T: () => SubjectReference, options: { "validate.rules": { message: { required: true } } } },
            { no: 5, name: "result", kind: "enum", T: () => ["authzed.api.v1.CheckDebugTrace.Permissionship", CheckDebugTrace_Permissionship, "PERMISSIONSHIP_"], options: { "validate.rules": { enum: { definedOnly: true, notIn: [0] } } } },
            { no: 8, name: "caveat_evaluation_info", kind: "message", T: () => CaveatEvalInfo },
            { no: 9, name: "duration", kind: "message", T: () => Duration },
            { no: 6, name: "was_cached_result", kind: "scalar", oneof: "resolution", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "sub_problems", kind: "message", oneof: "resolution", T: () => CheckDebugTrace_SubProblems }
        ]);
    }
    create(value?: PartialMessage<CheckDebugTrace>): CheckDebugTrace {
        const message = { permission: "", permissionType: 0, result: 0, resolution: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CheckDebugTrace>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckDebugTrace): CheckDebugTrace {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* authzed.api.v1.ObjectReference resource */ 1:
                    message.resource = ObjectReference.internalBinaryRead(reader, reader.uint32(), options, message.resource);
                    break;
                case /* string permission */ 2:
                    message.permission = reader.string();
                    break;
                case /* authzed.api.v1.CheckDebugTrace.PermissionType permission_type */ 3:
                    message.permissionType = reader.int32();
                    break;
                case /* authzed.api.v1.SubjectReference subject */ 4:
                    message.subject = SubjectReference.internalBinaryRead(reader, reader.uint32(), options, message.subject);
                    break;
                case /* authzed.api.v1.CheckDebugTrace.Permissionship result */ 5:
                    message.result = reader.int32();
                    break;
                case /* authzed.api.v1.CaveatEvalInfo caveat_evaluation_info */ 8:
                    message.caveatEvaluationInfo = CaveatEvalInfo.internalBinaryRead(reader, reader.uint32(), options, message.caveatEvaluationInfo);
                    break;
                case /* google.protobuf.Duration duration */ 9:
                    message.duration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.duration);
                    break;
                case /* bool was_cached_result */ 6:
                    message.resolution = {
                        oneofKind: "wasCachedResult",
                        wasCachedResult: reader.bool()
                    };
                    break;
                case /* authzed.api.v1.CheckDebugTrace.SubProblems sub_problems */ 7:
                    message.resolution = {
                        oneofKind: "subProblems",
                        subProblems: CheckDebugTrace_SubProblems.internalBinaryRead(reader, reader.uint32(), options, (message.resolution as any).subProblems)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CheckDebugTrace, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* authzed.api.v1.ObjectReference resource = 1; */
        if (message.resource)
            ObjectReference.internalBinaryWrite(message.resource, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string permission = 2; */
        if (message.permission !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.permission);
        /* authzed.api.v1.CheckDebugTrace.PermissionType permission_type = 3; */
        if (message.permissionType !== 0)
            writer.tag(3, WireType.Varint).int32(message.permissionType);
        /* authzed.api.v1.SubjectReference subject = 4; */
        if (message.subject)
            SubjectReference.internalBinaryWrite(message.subject, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* authzed.api.v1.CheckDebugTrace.Permissionship result = 5; */
        if (message.result !== 0)
            writer.tag(5, WireType.Varint).int32(message.result);
        /* authzed.api.v1.CaveatEvalInfo caveat_evaluation_info = 8; */
        if (message.caveatEvaluationInfo)
            CaveatEvalInfo.internalBinaryWrite(message.caveatEvaluationInfo, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration duration = 9; */
        if (message.duration)
            Duration.internalBinaryWrite(message.duration, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* bool was_cached_result = 6; */
        if (message.resolution.oneofKind === "wasCachedResult")
            writer.tag(6, WireType.Varint).bool(message.resolution.wasCachedResult);
        /* authzed.api.v1.CheckDebugTrace.SubProblems sub_problems = 7; */
        if (message.resolution.oneofKind === "subProblems")
            CheckDebugTrace_SubProblems.internalBinaryWrite(message.resolution.subProblems, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.CheckDebugTrace
 */
export const CheckDebugTrace = new CheckDebugTrace$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckDebugTrace_SubProblems$Type extends MessageType<CheckDebugTrace_SubProblems> {
    constructor() {
        super("authzed.api.v1.CheckDebugTrace.SubProblems", [
            { no: 1, name: "traces", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CheckDebugTrace }
        ]);
    }
    create(value?: PartialMessage<CheckDebugTrace_SubProblems>): CheckDebugTrace_SubProblems {
        const message = { traces: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CheckDebugTrace_SubProblems>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckDebugTrace_SubProblems): CheckDebugTrace_SubProblems {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated authzed.api.v1.CheckDebugTrace traces */ 1:
                    message.traces.push(CheckDebugTrace.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CheckDebugTrace_SubProblems, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated authzed.api.v1.CheckDebugTrace traces = 1; */
        for (let i = 0; i < message.traces.length; i++)
            CheckDebugTrace.internalBinaryWrite(message.traces[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.CheckDebugTrace.SubProblems
 */
export const CheckDebugTrace_SubProblems = new CheckDebugTrace_SubProblems$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CaveatEvalInfo$Type extends MessageType<CaveatEvalInfo> {
    constructor() {
        super("authzed.api.v1.CaveatEvalInfo", [
            { no: 1, name: "expression", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "result", kind: "enum", T: () => ["authzed.api.v1.CaveatEvalInfo.Result", CaveatEvalInfo_Result, "RESULT_"] },
            { no: 3, name: "context", kind: "message", T: () => Struct },
            { no: 4, name: "partial_caveat_info", kind: "message", T: () => PartialCaveatInfo },
            { no: 5, name: "caveat_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CaveatEvalInfo>): CaveatEvalInfo {
        const message = { expression: "", result: 0, caveatName: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CaveatEvalInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CaveatEvalInfo): CaveatEvalInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string expression */ 1:
                    message.expression = reader.string();
                    break;
                case /* authzed.api.v1.CaveatEvalInfo.Result result */ 2:
                    message.result = reader.int32();
                    break;
                case /* google.protobuf.Struct context */ 3:
                    message.context = Struct.internalBinaryRead(reader, reader.uint32(), options, message.context);
                    break;
                case /* authzed.api.v1.PartialCaveatInfo partial_caveat_info */ 4:
                    message.partialCaveatInfo = PartialCaveatInfo.internalBinaryRead(reader, reader.uint32(), options, message.partialCaveatInfo);
                    break;
                case /* string caveat_name */ 5:
                    message.caveatName = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CaveatEvalInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string expression = 1; */
        if (message.expression !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.expression);
        /* authzed.api.v1.CaveatEvalInfo.Result result = 2; */
        if (message.result !== 0)
            writer.tag(2, WireType.Varint).int32(message.result);
        /* google.protobuf.Struct context = 3; */
        if (message.context)
            Struct.internalBinaryWrite(message.context, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* authzed.api.v1.PartialCaveatInfo partial_caveat_info = 4; */
        if (message.partialCaveatInfo)
            PartialCaveatInfo.internalBinaryWrite(message.partialCaveatInfo, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* string caveat_name = 5; */
        if (message.caveatName !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.caveatName);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.CaveatEvalInfo
 */
export const CaveatEvalInfo = new CaveatEvalInfo$Type();
