
declare module 'csharp' {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    namespace CSharp {
        interface $Ref<T> {
            value: T
        }
        namespace System {
            interface Array$1<T> extends System.Array {
                get_Item(index: number):T;
                set_Item(index: number, value: T):void;
            }
        }
        type $Task<T> = System.Threading.Tasks.Task$1<T>
        namespace System {
            class Array extends System.Object implements System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.ICloneable, System.Collections.ICollection, System.Collections.IEnumerable, System.Collections.IList
            {
                protected [__keep_incompatibility]: never;
                public get LongLength(): bigint;
                public get IsFixedSize(): boolean;
                public get IsReadOnly(): boolean;
                public get IsSynchronized(): boolean;
                public get SyncRoot(): any;
                public get Length(): number;
                public get Rank(): number;
                public static CreateInstance ($elementType: System.Type, ...lengths: bigint[]) : System.Array
                public CopyTo ($array: System.Array, $index: number) : void
                public Clone () : any
                public static BinarySearch ($array: System.Array, $value: any) : number
                public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint) : void
                public static Copy ($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint) : void
                public CopyTo ($array: System.Array, $index: bigint) : void
                public GetLongLength ($dimension: number) : bigint
                public GetValue ($index: bigint) : any
                public GetValue ($index1: bigint, $index2: bigint) : any
                public GetValue ($index1: bigint, $index2: bigint, $index3: bigint) : any
                public GetValue (...indices: bigint[]) : any
                public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any) : number
                public static BinarySearch ($array: System.Array, $value: any, $comparer: System.Collections.IComparer) : number
                public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer) : number
                public static IndexOf ($array: System.Array, $value: any) : number
                public static IndexOf ($array: System.Array, $value: any, $startIndex: number) : number
                public static IndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
                public static LastIndexOf ($array: System.Array, $value: any) : number
                public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number) : number
                public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
                public static Reverse ($array: System.Array) : void
                public static Reverse ($array: System.Array, $index: number, $length: number) : void
                public SetValue ($value: any, $index: bigint) : void
                public SetValue ($value: any, $index1: bigint, $index2: bigint) : void
                public SetValue ($value: any, $index1: bigint, $index2: bigint, $index3: bigint) : void
                public SetValue ($value: any, ...indices: bigint[]) : void
                public static Sort ($array: System.Array) : void
                public static Sort ($array: System.Array, $index: number, $length: number) : void
                public static Sort ($array: System.Array, $comparer: System.Collections.IComparer) : void
                public static Sort ($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
                public static Sort ($keys: System.Array, $items: System.Array) : void
                public static Sort ($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer) : void
                public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number) : void
                public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
                public GetEnumerator () : System.Collections.IEnumerator
                public GetLength ($dimension: number) : number
                public GetLowerBound ($dimension: number) : number
                public GetValue (...indices: number[]) : any
                public SetValue ($value: any, ...indices: number[]) : void
                public GetUpperBound ($dimension: number) : number
                public GetValue ($index: number) : any
                public GetValue ($index1: number, $index2: number) : any
                public GetValue ($index1: number, $index2: number, $index3: number) : any
                public SetValue ($value: any, $index: number) : void
                public SetValue ($value: any, $index1: number, $index2: number) : void
                public SetValue ($value: any, $index1: number, $index2: number, $index3: number) : void
                public static CreateInstance ($elementType: System.Type, $length: number) : System.Array
                public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number) : System.Array
                public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number, $length3: number) : System.Array
                public static CreateInstance ($elementType: System.Type, ...lengths: number[]) : System.Array
                public static CreateInstance ($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>) : System.Array
                public static Clear ($array: System.Array, $index: number, $length: number) : void
                public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: number) : void
                public static Copy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
                public static ConstrainedCopy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
                public Initialize () : void
            }
            class Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICloneable
            {
            }
            class Type extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect
            {
                protected [__keep_incompatibility]: never;
            }
            class Int64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
            {
                protected [__keep_incompatibility]: never;
            }
            class Void extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class ValueType extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Int32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            interface IFormattable
            {
            }
            interface ISpanFormattable
            {
            }
            interface IComparable
            {
            }
            interface IComparable$1<T>
            {
            }
            interface IConvertible
            {
            }
            interface IEquatable$1<T>
            {
            }
            interface Converter$2<TInput, TOutput>
            { 
            (input: TInput) : TOutput; 
            Invoke?: (input: TInput) => TOutput;
            }
            interface MulticastDelegate
            { 
            (...args:any[]) : any; 
            Invoke?: (...args:any[]) => any;
            }
            var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
            class Delegate extends System.Object implements System.Runtime.Serialization.ISerializable, System.ICloneable
            {
                protected [__keep_incompatibility]: never;
            }
            interface Action$1<T>
            { 
            (obj: T) : void; 
            Invoke?: (obj: T) => void;
            }
            class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>
            {
                protected [__keep_incompatibility]: never;
            }
            interface Comparison$1<T>
            { 
            (x: T, y: T) : number; 
            Invoke?: (x: T, y: T) => number;
            }
            interface Predicate$1<T>
            { 
            (obj: T) : boolean; 
            Invoke?: (obj: T) => boolean;
            }
            class Single extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            class String extends System.Object implements System.ICloneable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.Collections.Generic.IEnumerable$1<number>, System.Collections.IEnumerable, System.IEquatable$1<string>
            {
                protected [__keep_incompatibility]: never;
            }
            class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            interface IFormatProvider
            {
            }
            interface IDisposable
            {
            }
            class Byte extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            class Enum extends System.ValueType implements System.IFormattable, System.IComparable, System.IConvertible
            {
                protected [__keep_incompatibility]: never;
            }
            class UInt64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
            {
                protected [__keep_incompatibility]: never;
            }
            class UInt32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            class MarshalByRefObject extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface IAsyncDisposable
            {
            }
            class UInt16 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            class Double extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
            {
                protected [__keep_incompatibility]: never;
            }
            interface Func$3<T1, T2, TResult>
            { 
            (arg1: T1, arg2: T2) : TResult; 
            Invoke?: (arg1: T1, arg2: T2) => TResult;
            }
            interface IAsyncResult
            {
            }
            interface Action$2<T1, T2>
            { 
            (arg1: T1, arg2: T2) : void; 
            Invoke?: (arg1: T1, arg2: T2) => void;
            }
            interface Func$1<TResult>
            { 
            () : TResult; 
            Invoke?: () => TResult;
            }
        }
        namespace System.Collections {
            interface IStructuralComparable
            {
            }
            interface IStructuralEquatable
            {
            }
            interface ICollection extends System.Collections.IEnumerable
            {
            }
            interface IEnumerable
            {
            }
            interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
            {
            }
            interface IComparer
            {
            }
            interface IEnumerator
            {
            }
        }
        namespace System.Reflection {
            class MemberInfo extends System.Object implements System.Runtime.InteropServices._MemberInfo, System.Reflection.ICustomAttributeProvider
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICustomAttributeProvider
            {
            }
            interface IReflect
            {
            }
            class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._MethodInfo, System.Reflection.ICustomAttributeProvider
            {
                protected [__keep_incompatibility]: never;
            }
            class MethodBase extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase, System.Reflection.ICustomAttributeProvider
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Runtime.InteropServices {
            interface _MemberInfo
            {
            }
            interface _Type
            {
            }
            interface _MethodBase
            {
            }
            interface _MethodInfo
            {
            }
        }
        namespace System.Collections.Generic {
            interface IReadOnlyList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>
            {
            }
            interface IEnumerable$1<T> extends System.Collections.IEnumerable
            {
            }
            interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
            {
            }
            interface IList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>
            {
            }
            interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
            {
            }
            interface IComparer$1<T>
            {
            }
            class List$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Collections.ObjectModel {
            class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Runtime.Serialization {
            interface ISerializable
            {
            }
        }
        namespace UnityEngine {
            /** Representation of 2D vectors and points. */
            class Vector2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector2>
            {
                protected [__keep_incompatibility]: never;
                /** X component of the vector. */
                public x : number/** Y component of the vector. */
                public y : number
                public static kEpsilon : number
                public static kEpsilonNormalSqrt : number/** Returns this vector with a magnitude of 1 (Read Only). */
                public get normalized(): UnityEngine.Vector2;
                /** Returns the length of this vector (Read Only). */
                public get magnitude(): number;
                /** Returns the squared length of this vector (Read Only). */
                public get sqrMagnitude(): number;
                /** Shorthand for writing Vector2(0, 0). */
                public static get zero(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(1, 1). */
                public static get one(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(0, 1). */
                public static get up(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(0, -1). */
                public static get down(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(-1, 0). */
                public static get left(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(1, 0). */
                public static get right(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(float.PositiveInfinity, float.PositiveInfinity). */
                public static get positiveInfinity(): UnityEngine.Vector2;
                /** Shorthand for writing Vector2(float.NegativeInfinity, float.NegativeInfinity). */
                public static get negativeInfinity(): UnityEngine.Vector2;
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                /** Set x and y components of an existing Vector2. */
                public Set ($newX: number, $newY: number) : void
                /** Linearly interpolates between vectors a and b by t. */
                public static Lerp ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
                /** Linearly interpolates between vectors a and b by t. */
                public static LerpUnclamped ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
                /** Moves a point current towards target. */
                public static MoveTowards ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number) : UnityEngine.Vector2
                /** Multiplies two vectors component-wise. */
                public static Scale ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Multiplies every component of this vector by the same component of scale. */
                public Scale ($scale: UnityEngine.Vector2) : void
                public Normalize () : void
                public ToString () : string
                /** Returns a formatted string for this vector. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string) : string
                /** Returns a formatted string for this vector. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
                /** Returns true if the given vector is exactly equal to this vector. */
                public Equals ($other: any) : boolean
                public Equals ($other: UnityEngine.Vector2) : boolean
                /** Reflects a vector off the vector defined by a normal. */
                public static Reflect ($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
                * @param inDirection The input direction.
                * @returns The perpendicular direction. 
                */
                public static Perpendicular ($inDirection: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Dot Product of two vectors. */
                public static Dot ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : number
                /** Gets the unsigned angle in degrees between from and to.
                * @param from The vector from which the angular difference is measured.
                * @param to The vector to which the angular difference is measured.
                * @returns The unsigned angle in degrees between the two vectors. 
                */
                public static Angle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
                /** Gets the signed angle in degrees between from and to.
                * @param from The vector from which the angular difference is measured.
                * @param to The vector to which the angular difference is measured.
                * @returns The signed angle in degrees between the two vectors. 
                */
                public static SignedAngle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
                /** Returns the distance between a and b. */
                public static Distance ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : number
                /** Returns a copy of vector with its magnitude clamped to maxLength. */
                public static ClampMagnitude ($vector: UnityEngine.Vector2, $maxLength: number) : UnityEngine.Vector2
                public static SqrMagnitude ($a: UnityEngine.Vector2) : number
                public SqrMagnitude () : number
                /** Returns a vector that is made from the smallest components of two vectors. */
                public static Min ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Returns a vector that is made from the largest components of two vectors. */
                public static Max ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector2
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number) : UnityEngine.Vector2
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector2
                public static op_Addition ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Subtraction ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Multiply ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Division ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_UnaryNegation ($a: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Multiply ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
                public static op_Multiply ($d: number, $a: UnityEngine.Vector2) : UnityEngine.Vector2
                public static op_Division ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
                public static op_Equality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
                public static op_Inequality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
                public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector2
                public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector3
                public constructor ($x: number, $y: number)
            }
            /** Representation of 3D vectors and points. */
            class Vector3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector3>
            {
                protected [__keep_incompatibility]: never;
                public static kEpsilon : number
                public static kEpsilonNormalSqrt : number/** X component of the vector. */
                public x : number/** Y component of the vector. */
                public y : number/** Z component of the vector. */
                public z : number/** Returns this vector with a magnitude of 1 (Read Only). */
                public get normalized(): UnityEngine.Vector3;
                /** Returns the length of this vector (Read Only). */
                public get magnitude(): number;
                /** Returns the squared length of this vector (Read Only). */
                public get sqrMagnitude(): number;
                /** Shorthand for writing Vector3(0, 0, 0). */
                public static get zero(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(1, 1, 1). */
                public static get one(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, 0, 1). */
                public static get forward(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, 0, -1). */
                public static get back(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, 1, 0). */
                public static get up(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(0, -1, 0). */
                public static get down(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(-1, 0, 0). */
                public static get left(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(1, 0, 0). */
                public static get right(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity). */
                public static get positiveInfinity(): UnityEngine.Vector3;
                /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity). */
                public static get negativeInfinity(): UnityEngine.Vector3;
                /** Spherically interpolates between two vectors. */
                public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Spherically interpolates between two vectors. */
                public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Makes vectors normalized and orthogonal to each other. */
                public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
                /** Makes vectors normalized and orthogonal to each other. */
                public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
                /** Rotates a vector current towards target.
                * @param current The vector being managed.
                * @param target The vector.
                * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
                * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
                * @returns The location that RotateTowards generates. 
                */
                public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
                /** Linearly interpolates between two points.
                * @param a Start value, returned when t = 0.
                * @param b End value, returned when t = 1.
                * @param t Value used to interpolate between a and b.
                * @returns Interpolated value, equals to a + (b - a) * t. 
                */
                public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Linearly interpolates between two vectors. */
                public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
                /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
                * @param current The position to move from.
                * @param target The position to move towards.
                * @param maxDistanceDelta Distance to move current per call.
                * @returns The new position. 
                */
                public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
                /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
                * @param target The position we are trying to reach.
                * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
                * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
                * @param maxSpeed Optionally allows you to clamp the maximum speed.
                * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
                */
                public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                /** Set x, y and z components of an existing Vector3. */
                public Set ($newX: number, $newY: number, $newZ: number) : void
                /** Multiplies two vectors component-wise. */
                public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Multiplies every component of this vector by the same component of scale. */
                public Scale ($scale: UnityEngine.Vector3) : void
                /** Cross Product of two vectors. */
                public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Returns true if the given vector is exactly equal to this vector. */
                public Equals ($other: any) : boolean
                public Equals ($other: UnityEngine.Vector3) : boolean
                /** Reflects a vector off the plane defined by a normal. */
                public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Makes this vector have a magnitude of 1. */
                public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
                public Normalize () : void
                /** Dot Product of two vectors. */
                public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
                /** Projects a vector onto another vector. */
                public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
                * @param planeNormal The direction from the vector towards the plane.
                * @param vector The location of the vector above the plane.
                * @returns The location of the vector on the plane. 
                */
                public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Calculates the angle between vectors from and.
                * @param from The vector from which the angular difference is measured.
                * @param to The vector to which the angular difference is measured.
                * @returns The angle in degrees between the two vectors. 
                */
                public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
                /** Calculates the signed angle between vectors from and to in relation to axis.
                * @param from The vector from which the angular difference is measured.
                * @param to The vector to which the angular difference is measured.
                * @param axis A vector around which the other vectors are rotated.
                * @returns Returns the signed angle between from and to in degrees. 
                */
                public static SignedAngle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3) : number
                /** Returns the distance between a and b. */
                public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
                /** Returns a copy of vector with its magnitude clamped to maxLength. */
                public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
                public static Magnitude ($vector: UnityEngine.Vector3) : number
                public static SqrMagnitude ($vector: UnityEngine.Vector3) : number
                /** Returns a vector that is made from the smallest components of two vectors. */
                public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Returns a vector that is made from the largest components of two vectors. */
                public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
                public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
                public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
                public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
                public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
                public ToString () : string
                /** Returns a formatted string for this vector. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string) : string
                /** Returns a formatted string for this vector. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
                public constructor ($x: number, $y: number, $z: number)
                public constructor ($x: number, $y: number)
            }
            /** Asynchronous operation coroutine. */
            class AsyncOperation extends UnityEngine.YieldInstruction
            {
                protected [__keep_incompatibility]: never;
                /** Has the operation finished? (Read Only) */
                public get isDone(): boolean;
                /** What's the operation's progress. (Read Only) */
                public get progress(): number;
                /** Priority lets you tweak in which order async operation calls will be performed. */
                public get priority(): number;
                public set priority(value: number);
                /** Allow Scenes to be activated as soon as it is ready. */
                public get allowSceneActivation(): boolean;
                public set allowSceneActivation(value: boolean);
                public add_completed ($value: System.Action$1<UnityEngine.AsyncOperation>) : void
                public remove_completed ($value: System.Action$1<UnityEngine.AsyncOperation>) : void
                public constructor ()
            }
            /** Base class for all yield instructions. */
            class YieldInstruction extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** The Resources class allows you to find and access Objects including assets. */
            class Resources extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Returns a list of all objects of Type type. */
                public static FindObjectsOfTypeAll ($type: System.Type) : System.Array$1<UnityEngine.Object>
                /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
                * @param path Path to the target resource to load.
                * @param systemTypeInstance Type filter for objects returned.
                * @returns The requested asset returned as an Object. 
                */
                public static Load ($path: string) : UnityEngine.Object
                /** Loads an asset stored at path in a Resources folder using an optional systemTypeInstance filter.
                * @param path Path to the target resource to load.
                * @param systemTypeInstance Type filter for objects returned.
                * @returns The requested asset returned as an Object. 
                */
                public static Load ($path: string, $systemTypeInstance: System.Type) : UnityEngine.Object
                /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
                */
                public static LoadAsync ($path: string) : UnityEngine.ResourceRequest
                /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
                * @param systemTypeInstance Type filter for objects returned.
                */
                public static LoadAsync ($path: string, $type: System.Type) : UnityEngine.ResourceRequest
                /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
                * @param systemTypeInstance Type filter for objects returned.
                */
                public static LoadAll ($path: string, $systemTypeInstance: System.Type) : System.Array$1<UnityEngine.Object>
                /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
                */
                public static LoadAll ($path: string) : System.Array$1<UnityEngine.Object>
                public static GetBuiltinResource ($type: System.Type, $path: string) : UnityEngine.Object
                /** Unloads assetToUnload from memory. */
                public static UnloadAsset ($assetToUnload: UnityEngine.Object) : void
                public static UnloadUnusedAssets () : UnityEngine.AsyncOperation
                /** Translates an instance ID to an object reference.
                * @param instanceID Instance ID of an Object.
                * @returns Resolved reference or null if the instance ID didn't match anything. 
                */
                public static InstanceIDToObject ($instanceID: number) : UnityEngine.Object
                public static InstanceIDToObjectList ($instanceIDs: Unity.Collections.NativeArray$1<number>, $objects: System.Collections.Generic.List$1<UnityEngine.Object>) : void
                public constructor ()
            }
            /** Base class for all objects Unity can reference. */
            class Object extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** The name of the object. */
                public get name(): string;
                public set name(value: string);
                /** Should the object be hidden, saved with the Scene or modifiable by the user? */
                public get hideFlags(): UnityEngine.HideFlags;
                public set hideFlags(value: UnityEngine.HideFlags);
                public GetInstanceID () : number
                public static op_Implicit ($exists: UnityEngine.Object) : boolean
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform) : UnityEngine.Object
                /** Clones the object original and returns the clone.
                * @param original An existing object that you want to make a copy of.
                * @param position Position for the new object.
                * @param rotation Orientation of the new object.
                * @param parent Parent that will be assigned to the new object.
                * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
                * @returns The instantiated clone. 
                */
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean) : UnityEngine.Object
                public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean) : UnityEngine.Object
                /** Removes a GameObject, component or asset. * @param obj The object to destroy.
                * @param t The optional amount of time to delay before destroying the object.
                */
                public static Destroy ($obj: UnityEngine.Object, $t: number) : void
                /** Removes a GameObject, component or asset. * @param obj The object to destroy.
                * @param t The optional amount of time to delay before destroying the object.
                */
                public static Destroy ($obj: UnityEngine.Object) : void
                /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
                * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
                */
                public static DestroyImmediate ($obj: UnityEngine.Object, $allowDestroyingAssets: boolean) : void
                /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
                * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
                */
                public static DestroyImmediate ($obj: UnityEngine.Object) : void
                /** Gets a list of all loaded objects of Type type.
                * @param type The type of object to find.
                * @param includeInactive If true, components attached to inactive GameObjects are also included.
                * @returns The array of objects found matching the type specified. 
                */
                public static FindObjectsOfType ($type: System.Type) : System.Array$1<UnityEngine.Object>
                /** Gets a list of all loaded objects of Type type.
                * @param type The type of object to find.
                * @param includeInactive If true, components attached to inactive GameObjects are also included.
                * @returns The array of objects found matching the type specified. 
                */
                public static FindObjectsOfType ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Object>
                /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
                */
                public static DontDestroyOnLoad ($target: UnityEngine.Object) : void
                /** Returns the first active loaded object of Type type.
                * @param type The type of object to find.
                * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
                */
                public static FindObjectOfType ($type: System.Type) : UnityEngine.Object
                /** Returns the first active loaded object of Type type.
                * @param type The type of object to find.
                * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
                */
                public static FindObjectOfType ($type: System.Type, $includeInactive: boolean) : UnityEngine.Object
                public static op_Equality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
                public static op_Inequality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
                public constructor ()
            }
            /** Asynchronous load request from the Resources bundle. */
            class ResourceRequest extends UnityEngine.AsyncOperation
            {
                protected [__keep_incompatibility]: never;
            }
            /** Represents a raw text or binary file asset. */
            class TextAsset extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** The raw bytes of the text asset. (Read Only) */
                public get bytes(): System.Array$1<number>;
                /** The text contents of the file as a string. (Read Only) */
                public get text(): string;
                /** The size of the text asset data in bytes. (Read Only) */
                public get dataSize(): bigint;
                public constructor ()
                public constructor ($text: string)
            }
            /** Quaternions are used to represent rotations. */
            class Quaternion extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Quaternion>
            {
                protected [__keep_incompatibility]: never;
            }
            /** Position, rotation and scale of an object. */
            class Transform extends UnityEngine.Component implements System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
                /** The world space position of the Transform. */
                public get position(): UnityEngine.Vector3;
                public set position(value: UnityEngine.Vector3);
                /** Position of the transform relative to the parent transform. */
                public get localPosition(): UnityEngine.Vector3;
                public set localPosition(value: UnityEngine.Vector3);
                /** The rotation as Euler angles in degrees. */
                public get eulerAngles(): UnityEngine.Vector3;
                public set eulerAngles(value: UnityEngine.Vector3);
                /** The rotation as Euler angles in degrees relative to the parent transform's rotation. */
                public get localEulerAngles(): UnityEngine.Vector3;
                public set localEulerAngles(value: UnityEngine.Vector3);
                /** The red axis of the transform in world space. */
                public get right(): UnityEngine.Vector3;
                public set right(value: UnityEngine.Vector3);
                /** The green axis of the transform in world space. */
                public get up(): UnityEngine.Vector3;
                public set up(value: UnityEngine.Vector3);
                /** Returns a normalized vector representing the blue axis of the transform in world space. */
                public get forward(): UnityEngine.Vector3;
                public set forward(value: UnityEngine.Vector3);
                /** A Quaternion that stores the rotation of the Transform in world space. */
                public get rotation(): UnityEngine.Quaternion;
                public set rotation(value: UnityEngine.Quaternion);
                /** The rotation of the transform relative to the transform rotation of the parent. */
                public get localRotation(): UnityEngine.Quaternion;
                public set localRotation(value: UnityEngine.Quaternion);
                /** The scale of the transform relative to the GameObjects parent. */
                public get localScale(): UnityEngine.Vector3;
                public set localScale(value: UnityEngine.Vector3);
                /** The parent of the transform. */
                public get parent(): UnityEngine.Transform;
                public set parent(value: UnityEngine.Transform);
                /** Matrix that transforms a point from world space into local space (Read Only). */
                public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
                /** Matrix that transforms a point from local space into world space (Read Only). */
                public get localToWorldMatrix(): UnityEngine.Matrix4x4;
                /** Returns the topmost transform in the hierarchy. */
                public get root(): UnityEngine.Transform;
                /** The number of children the parent Transform has. */
                public get childCount(): number;
                /** The global scale of the object (Read Only). */
                public get lossyScale(): UnityEngine.Vector3;
                /** Has the transform changed since the last time the flag was set to 'false'? */
                public get hasChanged(): boolean;
                public set hasChanged(value: boolean);
                /** The transform capacity of the transform's hierarchy data structure. */
                public get hierarchyCapacity(): number;
                public set hierarchyCapacity(value: number);
                /** The number of transforms in the transform's hierarchy data structure. */
                public get hierarchyCount(): number;
                /** Set the parent of the transform. * @param parent The parent Transform to use.
                * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
                */
                public SetParent ($p: UnityEngine.Transform) : void
                /** Set the parent of the transform. * @param parent The parent Transform to use.
                * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
                */
                public SetParent ($parent: UnityEngine.Transform, $worldPositionStays: boolean) : void
                /** Sets the world space position and rotation of the Transform component. */
                public SetPositionAndRotation ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
                /** Moves the transform in the direction and distance of translation. */
                public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
                /** Moves the transform in the direction and distance of translation. */
                public Translate ($translation: UnityEngine.Vector3) : void
                /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
                public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space) : void
                /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
                public Translate ($x: number, $y: number, $z: number) : void
                /** Moves the transform in the direction and distance of translation. */
                public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform) : void
                /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
                public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform) : void
                /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
                * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
                */
                public Rotate ($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
                /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
                */
                public Rotate ($eulers: UnityEngine.Vector3) : void
                /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
                * @param xAngle Degrees to rotate the GameObject around the X axis.
                * @param yAngle Degrees to rotate the GameObject around the Y axis.
                * @param zAngle Degrees to rotate the GameObject around the Z axis.
                */
                public Rotate ($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space) : void
                /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param xAngle Degrees to rotate the GameObject around the X axis.
                * @param yAngle Degrees to rotate the GameObject around the Y axis.
                * @param zAngle Degrees to rotate the GameObject around the Z axis.
                */
                public Rotate ($xAngle: number, $yAngle: number, $zAngle: number) : void
                /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
                * @param axis The axis to apply rotation to.
                * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
                */
                public Rotate ($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space) : void
                /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param axis The axis to apply rotation to.
                * @param angle The degrees of rotation to apply.
                */
                public Rotate ($axis: UnityEngine.Vector3, $angle: number) : void
                /** Rotates the transform about axis passing through point in world coordinates by angle degrees. */
                public RotateAround ($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number) : void
                /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3) : void
                /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($target: UnityEngine.Transform) : void
                /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : void
                /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
                * @param worldUp Vector specifying the upward direction.
                */
                public LookAt ($worldPosition: UnityEngine.Vector3) : void
                /** Transforms direction from local space to world space. */
                public TransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms direction x, y, z from local space to world space. */
                public TransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection. */
                public InverseTransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection. */
                public InverseTransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms vector from local space to world space. */
                public TransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms vector x, y, z from local space to world space. */
                public TransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector. */
                public InverseTransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector. */
                public InverseTransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms position from local space to world space. */
                public TransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the position x, y, z from local space to world space. */
                public TransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                /** Transforms position from world space to local space. */
                public InverseTransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
                /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint. */
                public InverseTransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
                public DetachChildren () : void
                public SetAsFirstSibling () : void
                public SetAsLastSibling () : void
                /** Sets the sibling index. * @param index Index to set.
                */
                public SetSiblingIndex ($index: number) : void
                public GetSiblingIndex () : number
                /** Finds a child by name n and returns it.
                * @param n Name of child to be found.
                * @returns The found child transform. Null if child with matching name isn't found. 
                */
                public Find ($n: string) : UnityEngine.Transform
                /** Is this transform a child of parent? */
                public IsChildOf ($parent: UnityEngine.Transform) : boolean
                public GetEnumerator () : System.Collections.IEnumerator
                /** Returns a transform child by index.
                * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
                * @returns Transform child by index. 
                */
                public GetChild ($index: number) : UnityEngine.Transform
            }
            /** Base class for everything attached to GameObjects. */
            class Component extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** The Transform attached to this GameObject. */
                public get transform(): UnityEngine.Transform;
                /** The game object this component is attached to. A component is always attached to a game object. */
                public get gameObject(): UnityEngine.GameObject;
                /** The tag of this game object. */
                public get tag(): string;
                public set tag(value: string);
                /** Returns the component of type if the GameObject has one attached.
                * @param type The type of Component to retrieve.
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponent ($type: System.Type) : UnityEngine.Component
                /** Gets the component of the specified type, if it exists.
                * @param type The type of the component to retrieve.
                * @param component The output argument that will contain the component or null.
                * @returns Returns true if the component is found, false otherwise. 
                */
                public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
                /** To improve the performance of your code, consider using GetComponent with a type instead of a string.
                * @param type The name of the type of Component to get.
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponent ($type: string) : UnityEngine.Component
                /** Returns the Component of type in the GameObject or any of its children using depth first search.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInChildren ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Returns the Component of type in the GameObject or any of its children using depth first search.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInChildren ($t: System.Type) : UnityEngine.Component
                /** Returns all components of Type type in the GameObject or any of its children using depth first search. Works recursively. * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set. includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless. Default is false.
                */
                public GetComponentsInChildren ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentsInChildren ($t: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns the Component of type in the GameObject or any of its parents.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInParent ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Returns the Component of type in the GameObject or any of its parents.
                * @param t The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                * @returns A Component of the matching type, otherwise null if no Component is found. 
                */
                public GetComponentInParent ($t: System.Type) : UnityEngine.Component
                /** Returns all components of Type type in the GameObject or any of its parents. * @param t The type of Component to retrieve.
                * @param includeInactive Should inactive Components be included in the found set?
                */
                public GetComponentsInParent ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentsInParent ($t: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns all components of Type type in the GameObject. * @param type The type of Component to retrieve.
                */
                public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
                /** Checks the GameObject's tag against the defined tag.
                * @param tag The tag to compare.
                * @returns Returns true if GameObject has same tag. Returns false otherwise. 
                */
                public CompareTag ($tag: string) : boolean
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
                * @param value Optional parameter value for the method.
                * @param options Should an error be raised if the method does not exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
                * @param value Optional parameter for the method.
                * @param options Should an error be raised if the target object doesn't implement the method for the message?
                */
                public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string, $parameter: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
                * @param parameter Optional parameter to pass to the method (can be any value).
                * @param options Should an error be raised if the method does not exist for a given target object?
                */
                public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public constructor ()
            }
            /** Bit mask that controls object destruction, saving and visibility in inspectors. */
            enum HideFlags
            { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
            /** Base class for all entities in Unity Scenes. */
            class GameObject extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** The Transform attached to this GameObject. */
                public get transform(): UnityEngine.Transform;
                /** The layer the GameObject is in. */
                public get layer(): number;
                public set layer(value: number);
                /** The local active state of this GameObject. (Read Only) */
                public get activeSelf(): boolean;
                /** Defines whether the GameObject is active in the Scene. */
                public get activeInHierarchy(): boolean;
                /** Gets and sets the GameObject's StaticEditorFlags. */
                public get isStatic(): boolean;
                public set isStatic(value: boolean);
                /** The tag of this game object. */
                public get tag(): string;
                public set tag(value: string);
                /** Scene that the GameObject is part of. */
                public get scene(): UnityEngine.SceneManagement.Scene;
                /** Scene culling mask Unity uses to determine which scene to render the GameObject in. */
                public get sceneCullingMask(): bigint;
                public get gameObject(): UnityEngine.GameObject;
                /** Creates a game object with a primitive mesh renderer and appropriate collider. * @param type The type of primitive object to create.
                */
                public static CreatePrimitive ($type: UnityEngine.PrimitiveType) : UnityEngine.GameObject
                /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
                */
                public GetComponent ($type: System.Type) : UnityEngine.Component
                /** Returns the component with name type if the GameObject has one attached, null if it doesn't. * @param type The type of Component to retrieve.
                */
                public GetComponent ($type: string) : UnityEngine.Component
                /** Returns the component of Type type in the GameObject or any of its children using depth first search.
                * @param type The type of Component to retrieve.
                * @returns A component of the matching type, if found. 
                */
                public GetComponentInChildren ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Returns the component of Type type in the GameObject or any of its children using depth first search.
                * @param type The type of Component to retrieve.
                * @returns A component of the matching type, if found. 
                */
                public GetComponentInChildren ($type: System.Type) : UnityEngine.Component
                /** Retrieves the component of Type type in the GameObject or any of its parents.
                * @param type Type of component to find.
                * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
                */
                public GetComponentInParent ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
                /** Retrieves the component of Type type in the GameObject or any of its parents.
                * @param type Type of component to find.
                * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
                */
                public GetComponentInParent ($type: System.Type) : UnityEngine.Component
                /** Returns all components of Type type in the GameObject. * @param type The type of component to retrieve.
                */
                public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
                public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
                /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively. * @param type The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                */
                public GetComponentsInChildren ($type: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively. * @param type The type of Component to retrieve.
                * @param includeInactive Should Components on inactive GameObjects be included in the found set?
                */
                public GetComponentsInChildren ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                public GetComponentsInParent ($type: System.Type) : System.Array$1<UnityEngine.Component>
                /** Returns all components of Type type in the GameObject or any of its parents. * @param type The type of Component to retrieve.
                * @param includeInactive Should inactive Components be included in the found set?
                */
                public GetComponentsInParent ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
                /** Gets the component of the specified type, if it exists.
                * @param type The type of component to retrieve.
                * @param component The output argument that will contain the component or null.
                * @returns Returns true if the component is found, false otherwise. 
                */
                public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
                /** Returns one active GameObject tagged tag. Returns null if no GameObject was found. * @param tag The tag to search for.
                */
                public static FindWithTag ($tag: string) : UnityEngine.GameObject
                public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
                /** Adds a component class of type componentType to the game object. C# Users can use a generic version. */
                public AddComponent ($componentType: System.Type) : UnityEngine.Component
                /** ActivatesDeactivates the GameObject, depending on the given true or false/ value. * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
                */
                public SetActive ($value: boolean) : void
                /** Is this game object tagged with tag ? * @param tag The tag to compare.
                */
                public CompareTag ($tag: string) : boolean
                public static FindGameObjectWithTag ($tag: string) : UnityEngine.GameObject
                /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found. * @param tag The name of the tag to search GameObjects for.
                */
                public static FindGameObjectsWithTag ($tag: string) : System.Array$1<UnityEngine.GameObject>
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessageUpwards ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessageUpwards ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessage ($methodName: string, $value: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
                * @param value An optional parameter value to pass to the called method.
                * @param options Should an error be raised if the method doesn't exist on the target object?
                */
                public SendMessage ($methodName: string) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
                public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
                public BroadcastMessage ($methodName: string, $parameter: any) : void
                /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
                public BroadcastMessage ($methodName: string) : void
                /** Finds a GameObject by name and returns it. */
                public static Find ($name: string) : UnityEngine.GameObject
                public constructor ($name: string)
                public constructor ()
                public constructor ($name: string, ...components: System.Type[])
            }
            /** The various primitives that can be created using the GameObject.CreatePrimitive function. */
            enum PrimitiveType
            { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
            /** Options for how to send a message. */
            enum SendMessageOptions
            { RequireReceiver = 0, DontRequireReceiver = 1 }
            /** A standard 4x4 transformation matrix. */
            class Matrix4x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Matrix4x4>
            {
                protected [__keep_incompatibility]: never;
            }
            /** The coordinate space in which to operate. */
            enum Space
            { World = 0, Self = 1 }
            /** AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime. AssetBundles are created via BuildPipeline.BuildAssetBundle. */
            class AssetBundle extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** Return true if the AssetBundle is a streamed Scene AssetBundle. */
                public get isStreamedSceneAssetBundle(): boolean;
                /** Controls the size of the shared AssetBundle loading cache. Default value is 1MB.  */
                public static get memoryBudgetKB(): number;
                public static set memoryBudgetKB(value: number);
                /** Unloads all currently loaded AssetBundles. * @param unloadAllObjects Determines whether the current instances of objects loaded from AssetBundles will also be unloaded.
                */
                public static UnloadAllAssetBundles ($unloadAllObjects: boolean) : void
                public static GetAllLoadedAssetBundles () : System.Collections.Generic.IEnumerable$1<UnityEngine.AssetBundle>
                public static LoadFromFileAsync ($path: string) : UnityEngine.AssetBundleCreateRequest
                public static LoadFromFileAsync ($path: string, $crc: number) : UnityEngine.AssetBundleCreateRequest
                /** Asynchronously loads an AssetBundle from a file on disk.
                * @param path Path of the file on disk.
                * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
                * @param offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
                * @returns Asynchronous create request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
                */
                public static LoadFromFileAsync ($path: string, $crc: number, $offset: bigint) : UnityEngine.AssetBundleCreateRequest
                public static LoadFromFile ($path: string) : UnityEngine.AssetBundle
                public static LoadFromFile ($path: string, $crc: number) : UnityEngine.AssetBundle
                /** Synchronously loads an AssetBundle from a file on disk.
                * @param path Path of the file on disk.
                * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
                * @param offset An optional byte offset. This value specifies where to start reading the AssetBundle from.
                * @returns Loaded AssetBundle object or null if failed. 
                */
                public static LoadFromFile ($path: string, $crc: number, $offset: bigint) : UnityEngine.AssetBundle
                public static LoadFromMemoryAsync ($binary: System.Array$1<number>) : UnityEngine.AssetBundleCreateRequest
                /** Asynchronously create an AssetBundle from a memory region.
                * @param binary Array of bytes with the AssetBundle data.
                * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
                * @returns Asynchronous create request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
                */
                public static LoadFromMemoryAsync ($binary: System.Array$1<number>, $crc: number) : UnityEngine.AssetBundleCreateRequest
                public static LoadFromMemory ($binary: System.Array$1<number>) : UnityEngine.AssetBundle
                /** Synchronously create an AssetBundle from a memory region.
                * @param binary Array of bytes with the AssetBundle data.
                * @param crc An optional CRC-32 checksum of the uncompressed content. If this is non-zero, then the content will be compared against the checksum before loading it, and give an error if it does not match.
                * @returns Loaded AssetBundle object or null if failed. 
                */
                public static LoadFromMemory ($binary: System.Array$1<number>, $crc: number) : UnityEngine.AssetBundle
                /** Asynchronously loads an AssetBundle from a managed Stream.
                * @param stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
                * @param crc An optional CRC-32 checksum of the uncompressed content.
                * @param managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
                * @returns Asynchronous create request for an AssetBundle. Use AssetBundleCreateRequest.assetBundle property to get an AssetBundle once it is loaded. 
                */
                public static LoadFromStreamAsync ($stream: System.IO.Stream, $crc: number, $managedReadBufferSize: number) : UnityEngine.AssetBundleCreateRequest
                public static LoadFromStreamAsync ($stream: System.IO.Stream, $crc: number) : UnityEngine.AssetBundleCreateRequest
                public static LoadFromStreamAsync ($stream: System.IO.Stream) : UnityEngine.AssetBundleCreateRequest
                /** Synchronously loads an AssetBundle from a managed Stream.
                * @param stream The managed Stream object. Unity calls Read(), Seek() and the Length property on this object to load the AssetBundle data.
                * @param crc An optional CRC-32 checksum of the uncompressed content.
                * @param managedReadBufferSize You can use this to override the size of the read buffer Unity uses while loading data. The default size is 32KB.
                * @returns The loaded AssetBundle object or null when the object fails to load. 
                */
                public static LoadFromStream ($stream: System.IO.Stream, $crc: number, $managedReadBufferSize: number) : UnityEngine.AssetBundle
                public static LoadFromStream ($stream: System.IO.Stream, $crc: number) : UnityEngine.AssetBundle
                public static LoadFromStream ($stream: System.IO.Stream) : UnityEngine.AssetBundle
                /** Set the 16-bytes key for AssetBundle Decryption. Set NULL will remove the key from memory. */
                public static SetAssetBundleDecryptKey ($password: string) : void
                /** Check if an AssetBundle contains a specific object. */
                public Contains ($name: string) : boolean
                /** Loads asset with name of type T from the bundle. */
                public LoadAsset ($name: string) : UnityEngine.Object
                /** Loads asset with name of a given type from the bundle. */
                public LoadAsset ($name: string, $type: System.Type) : UnityEngine.Object
                /** Asynchronously loads asset with name of a given T from the bundle. */
                public LoadAssetAsync ($name: string) : UnityEngine.AssetBundleRequest
                /** Asynchronously loads asset with name of a given type from the bundle. */
                public LoadAssetAsync ($name: string, $type: System.Type) : UnityEngine.AssetBundleRequest
                /** Loads asset and sub assets with name of type T from the bundle. */
                public LoadAssetWithSubAssets ($name: string) : System.Array$1<UnityEngine.Object>
                /** Loads asset and sub assets with name of a given type from the bundle. */
                public LoadAssetWithSubAssets ($name: string, $type: System.Type) : System.Array$1<UnityEngine.Object>
                /** Loads asset with sub assets with name of type T from the bundle asynchronously. */
                public LoadAssetWithSubAssetsAsync ($name: string) : UnityEngine.AssetBundleRequest
                /** Loads asset with sub assets with name of a given type from the bundle asynchronously. */
                public LoadAssetWithSubAssetsAsync ($name: string, $type: System.Type) : UnityEngine.AssetBundleRequest
                public LoadAllAssets () : System.Array$1<UnityEngine.Object>
                /** Loads all assets contained in the asset bundle that inherit from type. */
                public LoadAllAssets ($type: System.Type) : System.Array$1<UnityEngine.Object>
                public LoadAllAssetsAsync () : UnityEngine.AssetBundleRequest
                /** Loads all assets contained in the asset bundle that inherit from type asynchronously. */
                public LoadAllAssetsAsync ($type: System.Type) : UnityEngine.AssetBundleRequest
                /** Unloads an AssetBundle freeing its data. * @param unloadAllLoadedObjects Determines whether the current instances of objects loaded from the AssetBundle will also be unloaded.
                */
                public Unload ($unloadAllLoadedObjects: boolean) : void
                /** Unloads assets in the bundle.
                * @returns Asynchronous unload request for an AssetBundle. 
                */
                public UnloadAsync ($unloadAllLoadedObjects: boolean) : UnityEngine.AsyncOperation
                public GetAllAssetNames () : System.Array$1<string>
                public GetAllScenePaths () : System.Array$1<string>
                /** Asynchronously recompress a downloaded/stored AssetBundle from one BuildCompression to another. * @param inputPath Path to the AssetBundle to recompress.
                * @param outputPath Path to the recompressed AssetBundle to be generated. Can be the same as inputPath.
                * @param method The compression method, level and blocksize to use during recompression. Only some BuildCompression types are supported (see note).
                * @param expectedCRC CRC of the AssetBundle to test against. Testing this requires additional file reading and computation. Pass in 0 to skip this check. Unity does not compute a CRC when the source and destination BuildCompression are the same, so no CRC verification takes place (see note).
                * @param priority The priority at which the recompression operation should run. This sets thread priority during the operation and does not effect the order in which operations are performed. Recompression operations run on a background worker thread.
                */
                public static RecompressAssetBundleAsync ($inputPath: string, $outputPath: string, $method: UnityEngine.BuildCompression, $expectedCRC?: number, $priority?: UnityEngine.ThreadPriority) : UnityEngine.AssetBundleRecompressOperation
            }
            /** Asynchronous create request for an AssetBundle. */
            class AssetBundleCreateRequest extends UnityEngine.AsyncOperation
            {
                protected [__keep_incompatibility]: never;
            }
            /** Asynchronous load request from an AssetBundle. */
            class AssetBundleRequest extends UnityEngine.ResourceRequest
            {
                protected [__keep_incompatibility]: never;
            }
            /** Asynchronous AssetBundle recompression from one compression method and level to another. */
            class AssetBundleRecompressOperation extends UnityEngine.AsyncOperation
            {
                protected [__keep_incompatibility]: never;
            }
            /** Contains information about compression methods, compression levels and block sizes that are supported by Asset Bundle compression at build time and recompression at runtime. */
            class BuildCompression extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Priority of a thread. */
            enum ThreadPriority
            { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
            /** Represents a Sprite object for use in 2D gameplay. */
            class Sprite extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** Bounds of the Sprite, specified by its center and extents in world space units. */
                public get bounds(): UnityEngine.Bounds;
                /** Location of the Sprite on the original Texture, specified in pixels. */
                public get rect(): UnityEngine.Rect;
                /** Returns the border sizes of the sprite. */
                public get border(): UnityEngine.Vector4;
                /** Get the reference to the used texture. If packed this will point to the atlas, if not packed will point to the source sprite. */
                public get texture(): UnityEngine.Texture2D;
                /** The number of pixels in the sprite that correspond to one unit in world space. (Read Only) */
                public get pixelsPerUnit(): number;
                /** The Variant scale of texture used by the Sprite. This is useful to check when a Variant SpriteAtlas is being used by Sprites. */
                public get spriteAtlasTextureScale(): number;
                /** Returns the texture that contains the alpha channel from the source texture. Unity generates this texture under the hood for sprites that have alpha in the source, and need to be compressed using techniques like ETC1.
                Returns NULL if there is no associated alpha texture for the source sprite. This is the case if the sprite has not been setup to use ETC1 compression. */
                public get associatedAlphaSplitTexture(): UnityEngine.Texture2D;
                /** Location of the Sprite's center point in the Rect on the original Texture, specified in pixels. */
                public get pivot(): UnityEngine.Vector2;
                public get isUsingPlaceholder(): boolean;
                /** Returns true if this Sprite is packed in an atlas. */
                public get packed(): boolean;
                /** If Sprite is packed (see Sprite.packed), returns its SpritePackingMode. */
                public get packingMode(): UnityEngine.SpritePackingMode;
                /** If Sprite is packed (see Sprite.packed), returns its SpritePackingRotation. */
                public get packingRotation(): UnityEngine.SpritePackingRotation;
                /** Get the rectangle this sprite uses on its texture. Raises an exception if this sprite is tightly packed in an atlas. */
                public get textureRect(): UnityEngine.Rect;
                /** Gets the offset of the rectangle this sprite uses on its texture to the original sprite bounds. If sprite mesh type is FullRect, offset is zero. */
                public get textureRectOffset(): UnityEngine.Vector2;
                /** Returns a copy of the array containing sprite mesh vertex positions. */
                public get vertices(): System.Array$1<UnityEngine.Vector2>;
                /** Returns a copy of the array containing sprite mesh triangles. */
                public get triangles(): System.Array$1<number>;
                /** The base texture coordinates of the sprite mesh. */
                public get uv(): System.Array$1<UnityEngine.Vector2>;
                public GetPhysicsShapeCount () : number
                /** The number of points in the selected physics shape for the Sprite.
                * @param shapeIdx The index of the physics shape to retrieve the number of points from.
                * @returns The number of points in the selected physics shape for the Sprite. 
                */
                public GetPhysicsShapePointCount ($shapeIdx: number) : number
                public GetPhysicsShape ($shapeIdx: number, $physicsShape: System.Collections.Generic.List$1<UnityEngine.Vector2>) : number
                public OverridePhysicsShape ($physicsShapes: System.Collections.Generic.IList$1<System.Array$1<UnityEngine.Vector2>>) : void
                /** Sets up new Sprite geometry. * @param vertices Array of vertex positions in Sprite Rect space.
                * @param triangles Array of sprite mesh triangle indices.
                */
                public OverrideGeometry ($vertices: System.Array$1<UnityEngine.Vector2>, $triangles: System.Array$1<number>) : void
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType, $border: UnityEngine.Vector4, $generateFallbackPhysicsShape: boolean) : UnityEngine.Sprite
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType, $border: UnityEngine.Vector4) : UnityEngine.Sprite
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType) : UnityEngine.Sprite
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number) : UnityEngine.Sprite
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number) : UnityEngine.Sprite
                /** Create a new Sprite object. * @param texture Texture from which to obtain the sprite graphic.
                * @param rect Rectangular section of the texture to use for the sprite.
                * @param pivot Sprite's pivot point relative to its graphic rectangle.
                * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
                * @param extrude Amount by which the sprite mesh should be expanded outwards.
                * @param meshType Controls the type of mesh generated for the sprite.
                * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
                * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
                */
                public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2) : UnityEngine.Sprite
            }
            /** Represents an axis aligned bounding box. */
            class Bounds extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Bounds>
            {
                protected [__keep_incompatibility]: never;
            }
            /** A 2D Rectangle defined by X and Y position, width and height. */
            class Rect extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Rect>
            {
                protected [__keep_incompatibility]: never;
            }
            /** Representation of four-dimensional vectors. */
            class Vector4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector4>
            {
                protected [__keep_incompatibility]: never;
            }
            /** Class that represents textures in C# code. */
            class Texture2D extends UnityEngine.Texture
            {
                protected [__keep_incompatibility]: never;
            }
            /** Base class for Texture handling. */
            class Texture extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Sprite packing modes for the Sprite Packer. */
            enum SpritePackingMode
            { Tight = 0, Rectangle = 1 }
            /** Sprite rotation modes for the Sprite Packer. */
            enum SpritePackingRotation
            { None = 0, FlipHorizontal = 1, FlipVertical = 2, Rotate180 = 3, Any = 15 }
            /** Defines the type of mesh generated for a sprite. */
            enum SpriteMeshType
            { FullRect = 0, Tight = 1 }
            /** Representation of RGBA colors. */
            class Color extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Color>
            {
                protected [__keep_incompatibility]: never;
                /** Red component of the color. */
                public r : number/** Green component of the color. */
                public g : number/** Blue component of the color. */
                public b : number/** Alpha component of the color (0 is transparent, 1 is opaque). */
                public a : number/** Solid red. RGBA is (1, 0, 0, 1). */
                public static get red(): UnityEngine.Color;
                /** Solid green. RGBA is (0, 1, 0, 1). */
                public static get green(): UnityEngine.Color;
                /** Solid blue. RGBA is (0, 0, 1, 1). */
                public static get blue(): UnityEngine.Color;
                /** Solid white. RGBA is (1, 1, 1, 1). */
                public static get white(): UnityEngine.Color;
                /** Solid black. RGBA is (0, 0, 0, 1). */
                public static get black(): UnityEngine.Color;
                /** Yellow. RGBA is (1, 0.92, 0.016, 1), but the color is nice to look at! */
                public static get yellow(): UnityEngine.Color;
                /** Cyan. RGBA is (0, 1, 1, 1). */
                public static get cyan(): UnityEngine.Color;
                /** Magenta. RGBA is (1, 0, 1, 1). */
                public static get magenta(): UnityEngine.Color;
                /** Gray. RGBA is (0.5, 0.5, 0.5, 1). */
                public static get gray(): UnityEngine.Color;
                /** English spelling for gray. RGBA is the same (0.5, 0.5, 0.5, 1). */
                public static get grey(): UnityEngine.Color;
                /** Completely transparent. RGBA is (0, 0, 0, 0). */
                public static get clear(): UnityEngine.Color;
                /** The grayscale value of the color. (Read Only) */
                public get grayscale(): number;
                /** A linear value of an sRGB color. */
                public get linear(): UnityEngine.Color;
                /** A version of the color that has had the gamma curve applied. */
                public get gamma(): UnityEngine.Color;
                /** Returns the maximum color component value: Max(r,g,b). */
                public get maxColorComponent(): number;
                public ToString () : string
                /** Returns a formatted string of this color. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string) : string
                /** Returns a formatted string of this color. * @param format A numeric format string.
                * @param formatProvider An object that specifies culture-specific formatting.
                */
                public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
                public Equals ($other: any) : boolean
                public Equals ($other: UnityEngine.Color) : boolean
                public static op_Addition ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
                public static op_Subtraction ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
                public static op_Multiply ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
                public static op_Multiply ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
                public static op_Multiply ($b: number, $a: UnityEngine.Color) : UnityEngine.Color
                public static op_Division ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
                public static op_Equality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
                public static op_Inequality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
                /** Linearly interpolates between colors a and b by t. * @param a Color a.
                * @param b Color b.
                * @param t Float for combining a and b.
                */
                public static Lerp ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
                /** Linearly interpolates between colors a and b by t. */
                public static LerpUnclamped ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
                public static op_Implicit ($c: UnityEngine.Color) : UnityEngine.Vector4
                public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Color
                public get_Item ($index: number) : number
                public set_Item ($index: number, $value: number) : void
                /** Calculates the hue, saturation and value of an RGB input color. * @param rgbColor An input color.
                * @param H Output variable for hue.
                * @param S Output variable for saturation.
                * @param V Output variable for value.
                */
                public static RGBToHSV ($rgbColor: UnityEngine.Color, $H: $Ref<number>, $S: $Ref<number>, $V: $Ref<number>) : void
                /** Creates an RGB colour from HSV input.
                * @param H Hue [0..1].
                * @param S Saturation [0..1].
                * @param V Brightness value [0..1].
                * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
                * @returns An opaque colour with HSV matching the input. 
                */
                public static HSVToRGB ($H: number, $S: number, $V: number) : UnityEngine.Color
                /** Creates an RGB colour from HSV input.
                * @param H Hue [0..1].
                * @param S Saturation [0..1].
                * @param V Brightness value [0..1].
                * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
                * @returns An opaque colour with HSV matching the input. 
                */
                public static HSVToRGB ($H: number, $S: number, $V: number, $hdr: boolean) : UnityEngine.Color
                public constructor ($r: number, $g: number, $b: number, $a: number)
                public constructor ($r: number, $g: number, $b: number)
            }
            /** MonoBehaviour is the base class from which every Unity script derives. */
            class MonoBehaviour extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
            }
            /** Behaviours are Components that can be enabled or disabled. */
            class Behaviour extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
                /** Enabled Behaviours are Updated, disabled Behaviours are not. */
                public get enabled(): boolean;
                public set enabled(value: boolean);
                /** Reports whether a GameObject and its associated Behaviour is active and enabled. */
                public get isActiveAndEnabled(): boolean;
                public constructor ()
            }
            /** The material class. */
            class Material extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Position, size, anchor and pivot information for a rectangle. */
            class RectTransform extends UnityEngine.Transform implements System.Collections.IEnumerable
            {
                protected [__keep_incompatibility]: never;
            }
            /** Element that can be used for screen rendering. */
            class Canvas extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
            }
            /** A component that will render to the screen after all normal rendering has completed when attached to a Canvas. Designed for GUI application. */
            class CanvasRenderer extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
            }
            /** A Camera is a device through which the player views the world. */
            class Camera extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
            }
            interface ICanvasRaycastFilter
            {
            }
            interface ISerializationCallbackReceiver
            {
            }
            /** `PlayerPrefs` is a class that stores Player preferences between game sessions. It can store string, float and integer values into the user’s platform registry. */
            class PlayerPrefs extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** Sets a single integer value for the preference identified by the given key. You can use PlayerPrefs.GetInt to retrieve this value. */
                public static SetInt ($key: string, $value: number) : void
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetInt ($key: string, $defaultValue: number) : number
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetInt ($key: string) : number
                /** Sets the float value of the preference identified by the given key. You can use PlayerPrefs.GetFloat to retrieve this value. */
                public static SetFloat ($key: string, $value: number) : void
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetFloat ($key: string, $defaultValue: number) : number
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetFloat ($key: string) : number
                /** Sets a single string value for the preference identified by the given key. You can use PlayerPrefs.GetString to retrieve this value. */
                public static SetString ($key: string, $value: string) : void
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetString ($key: string, $defaultValue: string) : string
                /** Returns the value corresponding to key in the preference file if it exists. */
                public static GetString ($key: string) : string
                /** Returns true if the given key exists in PlayerPrefs, otherwise returns false. */
                public static HasKey ($key: string) : boolean
                /** Removes the given key from the PlayerPrefs. If the key does not exist, DeleteKey has no impact. */
                public static DeleteKey ($key: string) : void
                public static DeleteAll () : void
                public static Save () : void
                public constructor ()
            }
            /** Render textures are textures that can be rendered to. */
            class RenderTexture extends UnityEngine.Texture
            {
                protected [__keep_incompatibility]: never;
            }
            /** General functionality for all renderers. */
            class Renderer extends UnityEngine.Component
            {
                protected [__keep_incompatibility]: never;
            }
            /** A representation of audio sources in 3D. */
            class AudioSource extends UnityEngine.AudioBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            class AudioBehaviour extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
            }
            /** Interface to control the Mecanim animation system. */
            class Animator extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                /** Returns true if the current rig is optimizable with AnimatorUtility.OptimizeTransformHierarchy. */
                public get isOptimizable(): boolean;
                /** Returns true if the current rig is humanoid, false if it is generic. */
                public get isHuman(): boolean;
                /** Returns true if the current rig has root motion. */
                public get hasRootMotion(): boolean;
                /** Returns the scale of the current Avatar for a humanoid rig, (1 by default if the rig is generic). */
                public get humanScale(): number;
                /** Returns whether the animator is initialized successfully. */
                public get isInitialized(): boolean;
                /** Gets the avatar delta position for the last evaluated frame. */
                public get deltaPosition(): UnityEngine.Vector3;
                /** Gets the avatar delta rotation for the last evaluated frame. */
                public get deltaRotation(): UnityEngine.Quaternion;
                /** Gets the avatar velocity  for the last evaluated frame. */
                public get velocity(): UnityEngine.Vector3;
                /** Gets the avatar angular velocity for the last evaluated frame. */
                public get angularVelocity(): UnityEngine.Vector3;
                /** The root position, the position of the game object. */
                public get rootPosition(): UnityEngine.Vector3;
                public set rootPosition(value: UnityEngine.Vector3);
                /** The root rotation, the rotation of the game object. */
                public get rootRotation(): UnityEngine.Quaternion;
                public set rootRotation(value: UnityEngine.Quaternion);
                /** Should root motion be applied? */
                public get applyRootMotion(): boolean;
                public set applyRootMotion(value: boolean);
                /** Specifies the update mode of the Animator. */
                public get updateMode(): UnityEngine.AnimatorUpdateMode;
                public set updateMode(value: UnityEngine.AnimatorUpdateMode);
                /** Returns true if the object has a transform hierarchy. */
                public get hasTransformHierarchy(): boolean;
                /** The current gravity weight based on current animations that are played. */
                public get gravityWeight(): number;
                /** The position of the body center of mass. */
                public get bodyPosition(): UnityEngine.Vector3;
                public set bodyPosition(value: UnityEngine.Vector3);
                /** The rotation of the body center of mass. */
                public get bodyRotation(): UnityEngine.Quaternion;
                public set bodyRotation(value: UnityEngine.Quaternion);
                /** Automatic stabilization of feet during transition and blending. */
                public get stabilizeFeet(): boolean;
                public set stabilizeFeet(value: boolean);
                /** Returns the number of layers in the controller. */
                public get layerCount(): number;
                /** The AnimatorControllerParameter list used by the animator. (Read Only) */
                public get parameters(): System.Array$1<UnityEngine.AnimatorControllerParameter>;
                /** Returns the number of parameters in the controller. */
                public get parameterCount(): number;
                /** Blends pivot point between body center of mass and feet pivot. */
                public get feetPivotActive(): number;
                public set feetPivotActive(value: number);
                /** Gets the pivot weight. */
                public get pivotWeight(): number;
                /** Get the current position of the pivot. */
                public get pivotPosition(): UnityEngine.Vector3;
                /** If automatic matching is active. */
                public get isMatchingTarget(): boolean;
                /** The playback speed of the Animator. 1 is normal playback speed. */
                public get speed(): number;
                public set speed(value: number);
                /** Returns the position of the target specified by SetTarget. */
                public get targetPosition(): UnityEngine.Vector3;
                /** Returns the rotation of the target specified by SetTarget. */
                public get targetRotation(): UnityEngine.Quaternion;
                /** Controls culling of this Animator component. */
                public get cullingMode(): UnityEngine.AnimatorCullingMode;
                public set cullingMode(value: UnityEngine.AnimatorCullingMode);
                /** Sets the playback position in the recording buffer. */
                public get playbackTime(): number;
                public set playbackTime(value: number);
                /** Start time of the first frame of the buffer relative to the frame at which StartRecording was called. */
                public get recorderStartTime(): number;
                public set recorderStartTime(value: number);
                /** End time of the recorded clip relative to when StartRecording was called. */
                public get recorderStopTime(): number;
                public set recorderStopTime(value: number);
                /** Gets the mode of the Animator recorder. */
                public get recorderMode(): UnityEngine.AnimatorRecorderMode;
                /** The runtime representation of AnimatorController that controls the Animator. */
                public get runtimeAnimatorController(): UnityEngine.RuntimeAnimatorController;
                public set runtimeAnimatorController(value: UnityEngine.RuntimeAnimatorController);
                /** Returns true if Animator has any playables assigned to it. */
                public get hasBoundPlayables(): boolean;
                /** Gets/Sets the current Avatar. */
                public get avatar(): UnityEngine.Avatar;
                public set avatar(value: UnityEngine.Avatar);
                /** The PlayableGraph created by the Animator. */
                public get playableGraph(): UnityEngine.Playables.PlayableGraph;
                /** Additional layers affects the center of mass. */
                public get layersAffectMassCenter(): boolean;
                public set layersAffectMassCenter(value: boolean);
                /** Get left foot bottom height. */
                public get leftFeetBottomHeight(): number;
                /** Get right foot bottom height. */
                public get rightFeetBottomHeight(): number;
                public get logWarnings(): boolean;
                public set logWarnings(value: boolean);
                /** Sets whether the Animator sends events of type AnimationEvent. */
                public get fireEvents(): boolean;
                public set fireEvents(value: boolean);
                /** Controls the behaviour of the Animator component when a GameObject is disabled. */
                public get keepAnimatorControllerStateOnDisable(): boolean;
                public set keepAnimatorControllerStateOnDisable(value: boolean);
                /** Returns the value of the given float parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetFloat ($name: string) : number
                /** Returns the value of the given float parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetFloat ($id: number) : number
                /** Send float values to the Animator to affect transitions. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                * @param dampTime The damper total time.
                * @param deltaTime The delta time to give to the damper.
                */
                public SetFloat ($name: string, $value: number) : void
                /** Send float values to the Animator to affect transitions. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                * @param dampTime The damper total time.
                * @param deltaTime The delta time to give to the damper.
                */
                public SetFloat ($name: string, $value: number, $dampTime: number, $deltaTime: number) : void
                /** Send float values to the Animator to affect transitions. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                * @param dampTime The damper total time.
                * @param deltaTime The delta time to give to the damper.
                */
                public SetFloat ($id: number, $value: number) : void
                /** Send float values to the Animator to affect transitions. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                * @param dampTime The damper total time.
                * @param deltaTime The delta time to give to the damper.
                */
                public SetFloat ($id: number, $value: number, $dampTime: number, $deltaTime: number) : void
                /** Returns the value of the given boolean parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetBool ($name: string) : boolean
                /** Returns the value of the given boolean parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetBool ($id: number) : boolean
                /** Sets the value of the given boolean parameter. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                */
                public SetBool ($name: string, $value: boolean) : void
                /** Sets the value of the given boolean parameter. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                */
                public SetBool ($id: number, $value: boolean) : void
                /** Returns the value of the given integer parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetInteger ($name: string) : number
                /** Returns the value of the given integer parameter.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns The value of the parameter. 
                */
                public GetInteger ($id: number) : number
                /** Sets the value of the given integer parameter. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                */
                public SetInteger ($name: string, $value: number) : void
                /** Sets the value of the given integer parameter. * @param name The parameter name.
                * @param id The parameter ID.
                * @param value The new parameter value.
                */
                public SetInteger ($id: number, $value: number) : void
                /** Sets the value of the given trigger parameter. * @param name The parameter name.
                * @param id The parameter ID.
                */
                public SetTrigger ($name: string) : void
                /** Sets the value of the given trigger parameter. * @param name The parameter name.
                * @param id The parameter ID.
                */
                public SetTrigger ($id: number) : void
                /** Resets the value of the given trigger parameter. * @param name The parameter name.
                * @param id The parameter ID.
                */
                public ResetTrigger ($name: string) : void
                /** Resets the value of the given trigger parameter. * @param name The parameter name.
                * @param id The parameter ID.
                */
                public ResetTrigger ($id: number) : void
                /** Returns true if the parameter is controlled by a curve, false otherwise.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns True if the parameter is controlled by a curve, false otherwise. 
                */
                public IsParameterControlledByCurve ($name: string) : boolean
                /** Returns true if the parameter is controlled by a curve, false otherwise.
                * @param name The parameter name.
                * @param id The parameter ID.
                * @returns True if the parameter is controlled by a curve, false otherwise. 
                */
                public IsParameterControlledByCurve ($id: number) : boolean
                /** Gets the position of an IK goal.
                * @param goal The AvatarIKGoal that is queried.
                * @returns Return the current position of this IK goal in world space. 
                */
                public GetIKPosition ($goal: UnityEngine.AvatarIKGoal) : UnityEngine.Vector3
                /** Sets the position of an IK goal. * @param goal The AvatarIKGoal that is set.
                * @param goalPosition The position in world space.
                */
                public SetIKPosition ($goal: UnityEngine.AvatarIKGoal, $goalPosition: UnityEngine.Vector3) : void
                /** Gets the rotation of an IK goal. * @param goal The AvatarIKGoal that is is queried.
                */
                public GetIKRotation ($goal: UnityEngine.AvatarIKGoal) : UnityEngine.Quaternion
                /** Sets the rotation of an IK goal. * @param goal The AvatarIKGoal that is set.
                * @param goalRotation The rotation in world space.
                */
                public SetIKRotation ($goal: UnityEngine.AvatarIKGoal, $goalRotation: UnityEngine.Quaternion) : void
                /** Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal). * @param goal The AvatarIKGoal that is queried.
                */
                public GetIKPositionWeight ($goal: UnityEngine.AvatarIKGoal) : number
                /** Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal). * @param goal The AvatarIKGoal that is set.
                * @param value The translative weight.
                */
                public SetIKPositionWeight ($goal: UnityEngine.AvatarIKGoal, $value: number) : void
                /** Gets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal). * @param goal The AvatarIKGoal that is queried.
                */
                public GetIKRotationWeight ($goal: UnityEngine.AvatarIKGoal) : number
                /** Sets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal). * @param goal The AvatarIKGoal that is set.
                * @param value The rotational weight.
                */
                public SetIKRotationWeight ($goal: UnityEngine.AvatarIKGoal, $value: number) : void
                /** Gets the position of an IK hint.
                * @param hint The AvatarIKHint that is queried.
                * @returns Return the current position of this IK hint in world space. 
                */
                public GetIKHintPosition ($hint: UnityEngine.AvatarIKHint) : UnityEngine.Vector3
                /** Sets the position of an IK hint. * @param hint The AvatarIKHint that is set.
                * @param hintPosition The position in world space.
                */
                public SetIKHintPosition ($hint: UnityEngine.AvatarIKHint, $hintPosition: UnityEngine.Vector3) : void
                /** Gets the translative weight of an IK Hint (0 = at the original animation before IK, 1 = at the hint).
                * @param hint The AvatarIKHint that is queried.
                * @returns Return translative weight. 
                */
                public GetIKHintPositionWeight ($hint: UnityEngine.AvatarIKHint) : number
                /** Sets the translative weight of an IK hint (0 = at the original animation before IK, 1 = at the hint). * @param hint The AvatarIKHint that is set.
                * @param value The translative weight.
                */
                public SetIKHintPositionWeight ($hint: UnityEngine.AvatarIKHint, $value: number) : void
                /** Sets the look at position. * @param lookAtPosition The position to lookAt.
                */
                public SetLookAtPosition ($lookAtPosition: UnityEngine.Vector3) : void
                /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
                * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
                * @param headWeight (0-1) determines how much the head is involved in the LookAt.
                * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
                * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
                */
                public SetLookAtWeight ($weight: number) : void
                /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
                * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
                * @param headWeight (0-1) determines how much the head is involved in the LookAt.
                * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
                * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
                */
                public SetLookAtWeight ($weight: number, $bodyWeight: number) : void
                /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
                * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
                * @param headWeight (0-1) determines how much the head is involved in the LookAt.
                * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
                * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
                */
                public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number) : void
                /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
                * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
                * @param headWeight (0-1) determines how much the head is involved in the LookAt.
                * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
                * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
                */
                public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number) : void
                /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
                * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
                * @param headWeight (0-1) determines how much the head is involved in the LookAt.
                * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
                * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
                */
                public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number, $clampWeight: number) : void
                /** Sets local rotation of a human bone during a IK pass. * @param humanBoneId The human bone Id.
                * @param rotation The local rotation.
                */
                public SetBoneLocalRotation ($humanBoneId: UnityEngine.HumanBodyBones, $rotation: UnityEngine.Quaternion) : void
                public GetBehaviours ($fullPathHash: number, $layerIndex: number) : System.Array$1<UnityEngine.StateMachineBehaviour>
                /** Returns the layer name.
                * @param layerIndex The layer index.
                * @returns The layer name. 
                */
                public GetLayerName ($layerIndex: number) : string
                /** Returns the index of the layer with the given name.
                * @param layerName The layer name.
                * @returns The layer index. 
                */
                public GetLayerIndex ($layerName: string) : number
                /** Returns the weight of the layer at the specified index.
                * @param layerIndex The layer index.
                * @returns The layer weight. 
                */
                public GetLayerWeight ($layerIndex: number) : number
                /** Sets the weight of the layer at the given index. * @param layerIndex The layer index.
                * @param weight The new layer weight.
                */
                public SetLayerWeight ($layerIndex: number, $weight: number) : void
                /** Returns an AnimatorStateInfo with the information on the current state.
                * @param layerIndex The layer index.
                * @returns An AnimatorStateInfo with the information on the current state. 
                */
                public GetCurrentAnimatorStateInfo ($layerIndex: number) : UnityEngine.AnimatorStateInfo
                /** Returns an AnimatorStateInfo with the information on the next state.
                * @param layerIndex The layer index.
                * @returns An AnimatorStateInfo with the information on the next state. 
                */
                public GetNextAnimatorStateInfo ($layerIndex: number) : UnityEngine.AnimatorStateInfo
                /** Returns an AnimatorTransitionInfo with the informations on the current transition.
                * @param layerIndex The layer's index.
                * @returns An AnimatorTransitionInfo with the informations on the current transition. 
                */
                public GetAnimatorTransitionInfo ($layerIndex: number) : UnityEngine.AnimatorTransitionInfo
                /** Returns the number of AnimatorClipInfo in the current state.
                * @param layerIndex The layer index.
                * @returns The number of AnimatorClipInfo in the current state. 
                */
                public GetCurrentAnimatorClipInfoCount ($layerIndex: number) : number
                /** Returns the number of AnimatorClipInfo in the next state.
                * @param layerIndex The layer index.
                * @returns The number of AnimatorClipInfo in the next state. 
                */
                public GetNextAnimatorClipInfoCount ($layerIndex: number) : number
                /** Returns an array of all the AnimatorClipInfo in the current state of the given layer.
                * @param layerIndex The layer index.
                * @returns An array of all the AnimatorClipInfo in the current state. 
                */
                public GetCurrentAnimatorClipInfo ($layerIndex: number) : System.Array$1<UnityEngine.AnimatorClipInfo>
                /** Returns an array of all the AnimatorClipInfo in the next state of the given layer.
                * @param layerIndex The layer index.
                * @returns An array of all the AnimatorClipInfo in the next state. 
                */
                public GetNextAnimatorClipInfo ($layerIndex: number) : System.Array$1<UnityEngine.AnimatorClipInfo>
                public GetCurrentAnimatorClipInfo ($layerIndex: number, $clips: System.Collections.Generic.List$1<UnityEngine.AnimatorClipInfo>) : void
                public GetNextAnimatorClipInfo ($layerIndex: number, $clips: System.Collections.Generic.List$1<UnityEngine.AnimatorClipInfo>) : void
                /** Returns true if there is a transition on the given layer, false otherwise.
                * @param layerIndex The layer index.
                * @returns True if there is a transition on the given layer, false otherwise. 
                */
                public IsInTransition ($layerIndex: number) : boolean
                /** See AnimatorController.parameters. */
                public GetParameter ($index: number) : UnityEngine.AnimatorControllerParameter
                public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number) : void
                /** Automatically adjust the GameObject position and rotation. * @param matchPosition The position we want the body part to reach.
                * @param matchRotation The rotation in which we want the body part to be.
                * @param targetBodyPart The body part that is involved in the match.
                * @param weightMask Structure that contains weights for matching position and rotation.
                * @param startNormalizedTime Start time within the animation clip (0 - beginning of clip, 1 - end of clip).
                * @param targetNormalizedTime End time within the animation clip (0 - beginning of clip, 1 - end of clip), values greater than 1 can be set to trigger a match after a certain number of loops. Ex: 2.3 means at 30% of 2nd loop.
                * @param completeMatch Allows you to specify what should happen if the MatchTarget function is interrupted. A value of true causes the GameObject to immediately move to the matchPosition if interrupted. A value of false causes the GameObject to stay at its current position if interrupted.
                */
                public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number) : void
                public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number, $completeMatch: boolean) : void
                public InterruptMatchTarget () : void
                /** Interrupts the automatic target matching. */
                public InterruptMatchTarget ($completeMatch: boolean) : void
                public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number) : void
                public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number) : void
                public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number) : void
                /** Creates a crossfade from the current state to any other state using times in seconds. * @param stateName The name of the state.
                * @param stateHashName The hash name of the state.
                * @param fixedTransitionDuration The duration of the transition (in seconds).
                * @param layer The layer where the crossfade occurs.
                * @param fixedTimeOffset The time of the state (in seconds).
                * @param normalizedTransitionTime The time of the transition (normalized).
                */
                public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number, $normalizedTransitionTime: number) : void
                public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number) : void
                public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number) : void
                public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number) : void
                /** Creates a crossfade from the current state to any other state using times in seconds. * @param stateName The name of the state.
                * @param stateHashName The hash name of the state.
                * @param fixedTransitionDuration The duration of the transition (in seconds).
                * @param layer The layer where the crossfade occurs.
                * @param fixedTimeOffset The time of the state (in seconds).
                * @param normalizedTransitionTime The time of the transition (normalized).
                */
                public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number, $normalizedTransitionTime: number) : void
                public WriteDefaultValues () : void
                public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number) : void
                public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number) : void
                public CrossFade ($stateName: string, $normalizedTransitionDuration: number) : void
                /** Creates a crossfade from the current state to any other state using normalized times. * @param stateName The name of the state.
                * @param stateHashName The hash name of the state.
                * @param normalizedTransitionDuration The duration of the transition (normalized).
                * @param layer The layer where the crossfade occurs.
                * @param normalizedTimeOffset The time of the state (normalized).
                * @param normalizedTransitionTime The time of the transition (normalized).
                */
                public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number, $normalizedTransitionTime: number) : void
                /** Creates a crossfade from the current state to any other state using normalized times. * @param stateName The name of the state.
                * @param stateHashName The hash name of the state.
                * @param normalizedTransitionDuration The duration of the transition (normalized).
                * @param layer The layer where the crossfade occurs.
                * @param normalizedTimeOffset The time of the state (normalized).
                * @param normalizedTransitionTime The time of the transition (normalized).
                */
                public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number, $normalizedTransitionTime: number) : void
                public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number) : void
                public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number) : void
                public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number) : void
                public PlayInFixedTime ($stateName: string, $layer: number) : void
                public PlayInFixedTime ($stateName: string) : void
                /** Plays a state. * @param stateName The state name.
                * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
                * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
                * @param fixedTime The time offset (in seconds).
                */
                public PlayInFixedTime ($stateName: string, $layer: number, $fixedTime: number) : void
                /** Plays a state. * @param stateName The state name.
                * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
                * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
                * @param fixedTime The time offset (in seconds).
                */
                public PlayInFixedTime ($stateNameHash: number, $layer: number, $fixedTime: number) : void
                public PlayInFixedTime ($stateNameHash: number, $layer: number) : void
                public PlayInFixedTime ($stateNameHash: number) : void
                public Play ($stateName: string, $layer: number) : void
                public Play ($stateName: string) : void
                /** Plays a state. * @param stateName The state name.
                * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
                * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
                * @param normalizedTime The time offset between zero and one.
                */
                public Play ($stateName: string, $layer: number, $normalizedTime: number) : void
                /** Plays a state. * @param stateName The state name.
                * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
                * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
                * @param normalizedTime The time offset between zero and one.
                */
                public Play ($stateNameHash: number, $layer: number, $normalizedTime: number) : void
                public Play ($stateNameHash: number, $layer: number) : void
                public Play ($stateNameHash: number) : void
                /** Sets an AvatarTarget and a targetNormalizedTime for the current state. * @param targetIndex The avatar body part that is queried.
                * @param targetNormalizedTime The current state Time that is queried.
                */
                public SetTarget ($targetIndex: UnityEngine.AvatarTarget, $targetNormalizedTime: number) : void
                /** Returns Transform mapped to this human bone id. Returns null if the animator is disabled, if it does not have a human description, or if the bone id is invalid. * @param humanBoneId The human bone that is queried, see enum HumanBodyBones for a list of possible values.
                */
                public GetBoneTransform ($humanBoneId: UnityEngine.HumanBodyBones) : UnityEngine.Transform
                public StartPlayback () : void
                public StopPlayback () : void
                /** Sets the animator in recording mode, and allocates a circular buffer of size frameCount. * @param frameCount The number of frames (updates) that will be recorded. If frameCount is 0, the recording will continue until the user calls StopRecording. The maximum value for frameCount is 10000.
                */
                public StartRecording ($frameCount: number) : void
                public StopRecording () : void
                /** Returns true if the state exists in this layer, false otherwise.
                * @param layerIndex The layer index.
                * @param stateID The state ID.
                * @returns True if the state exists in this layer, false otherwise. 
                */
                public HasState ($layerIndex: number, $stateID: number) : boolean
                /** Generates an parameter id from a string. * @param name The string to convert to Id.
                */
                public static StringToHash ($name: string) : number
                /** Evaluates the animator based on deltaTime. * @param deltaTime The time delta.
                */
                public Update ($deltaTime: number) : void
                public Rebind () : void
                public ApplyBuiltinRootMotion () : void
                public constructor ()
            }
            /** Information about what animation clips is played and its weight. */
            class AnimationInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** The update mode of the Animator. */
            enum AnimatorUpdateMode
            { Normal = 0, AnimatePhysics = 1, UnscaledTime = 2 }
            /** IK Goal. */
            enum AvatarIKGoal
            { LeftFoot = 0, RightFoot = 1, LeftHand = 2, RightHand = 3 }
            /** IK Hint. */
            enum AvatarIKHint
            { LeftKnee = 0, RightKnee = 1, LeftElbow = 2, RightElbow = 3 }
            /** Human Body Bones. */
            enum HumanBodyBones
            { Hips = 0, LeftUpperLeg = 1, RightUpperLeg = 2, LeftLowerLeg = 3, RightLowerLeg = 4, LeftFoot = 5, RightFoot = 6, Spine = 7, Chest = 8, UpperChest = 54, Neck = 9, Head = 10, LeftShoulder = 11, RightShoulder = 12, LeftUpperArm = 13, RightUpperArm = 14, LeftLowerArm = 15, RightLowerArm = 16, LeftHand = 17, RightHand = 18, LeftToes = 19, RightToes = 20, LeftEye = 21, RightEye = 22, Jaw = 23, LeftThumbProximal = 24, LeftThumbIntermediate = 25, LeftThumbDistal = 26, LeftIndexProximal = 27, LeftIndexIntermediate = 28, LeftIndexDistal = 29, LeftMiddleProximal = 30, LeftMiddleIntermediate = 31, LeftMiddleDistal = 32, LeftRingProximal = 33, LeftRingIntermediate = 34, LeftRingDistal = 35, LeftLittleProximal = 36, LeftLittleIntermediate = 37, LeftLittleDistal = 38, RightThumbProximal = 39, RightThumbIntermediate = 40, RightThumbDistal = 41, RightIndexProximal = 42, RightIndexIntermediate = 43, RightIndexDistal = 44, RightMiddleProximal = 45, RightMiddleIntermediate = 46, RightMiddleDistal = 47, RightRingProximal = 48, RightRingIntermediate = 49, RightRingDistal = 50, RightLittleProximal = 51, RightLittleIntermediate = 52, RightLittleDistal = 53, LastBone = 55 }
            /** StateMachineBehaviour is a component that can be added to a state machine state. It's the base class every script on a state derives from. */
            class StateMachineBehaviour extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
            /** A class you can derive from if you want to create objects that don't need to be attached to game objects. */
            class ScriptableObject extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Information about the current or next state. */
            class AnimatorStateInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Information about the current transition. */
            class AnimatorTransitionInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Information about clip being played and blended by the Animator. */
            class AnimatorClipInfo extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Used to communicate between scripting and the controller. Some parameters can be set in scripting and used by the controller, while other parameters are based on Custom Curves in Animation Clips and can be sampled using the scripting API. */
            class AnimatorControllerParameter extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Target. */
            enum AvatarTarget
            { Root = 0, Body = 1, LeftFoot = 2, RightFoot = 3, LeftHand = 4, RightHand = 5 }
            /** Use this struct to specify the position and rotation weight mask for Animator.MatchTarget. */
            class MatchTargetWeightMask extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Culling mode for the Animator. */
            enum AnimatorCullingMode
            { AlwaysAnimate = 0, CullUpdateTransforms = 1, CullCompletely = 2, BasedOnRenderers = 1 }
            /** The mode of the Animator's recorder. */
            enum AnimatorRecorderMode
            { Offline = 0, Playback = 1, Record = 2 }
            /** The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime. */
            class RuntimeAnimatorController extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Avatar definition. */
            class Avatar extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Representation of RGBA colors in 32 bit format. */
            class Color32 extends System.ValueType implements System.IFormattable
            {
                protected [__keep_incompatibility]: never;
            }
            /** A class that allows you to create or modify meshes. */
            class Mesh extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace Unity.Collections {
            class NativeArray$1<T> extends System.ValueType implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.IDisposable, System.IEquatable$1<Unity.Collections.NativeArray$1<T>>
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.SceneManagement {
            /** Run-time data structure for *.unity file. */
            class Scene extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                public get handle(): number;
                /** Returns the relative path of the Scene. Like: "AssetsMyScenesMyScene.unity". */
                public get path(): string;
                /** Returns the name of the Scene that is currently active in the game or app. */
                public get name(): string;
                public set name(value: string);
                /** Returns true if the Scene is loaded. */
                public get isLoaded(): boolean;
                /** Return the index of the Scene in the Build Settings. */
                public get buildIndex(): number;
                /** Returns true if the Scene is modifed. */
                public get isDirty(): boolean;
                /** The number of root transforms of this Scene. */
                public get rootCount(): number;
                public get isSubScene(): boolean;
                public set isSubScene(value: boolean);
                public IsValid () : boolean
                public GetRootGameObjects () : System.Array$1<UnityEngine.GameObject>
                public GetRootGameObjects ($rootGameObjects: System.Collections.Generic.List$1<UnityEngine.GameObject>) : void
                public static op_Equality ($lhs: UnityEngine.SceneManagement.Scene, $rhs: UnityEngine.SceneManagement.Scene) : boolean
                public static op_Inequality ($lhs: UnityEngine.SceneManagement.Scene, $rhs: UnityEngine.SceneManagement.Scene) : boolean
            }
            /** This struct collects all the LoadScene parameters in to a single place. */
            class LoadSceneParameters extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
                /** See LoadSceneMode. */
                public get loadSceneMode(): UnityEngine.SceneManagement.LoadSceneMode;
                public set loadSceneMode(value: UnityEngine.SceneManagement.LoadSceneMode);
                /** See SceneManagement.LocalPhysicsMode. */
                public get localPhysicsMode(): UnityEngine.SceneManagement.LocalPhysicsMode;
                public set localPhysicsMode(value: UnityEngine.SceneManagement.LocalPhysicsMode);
                public constructor ($mode: UnityEngine.SceneManagement.LoadSceneMode)
                public constructor ($mode: UnityEngine.SceneManagement.LoadSceneMode, $physicsMode: UnityEngine.SceneManagement.LocalPhysicsMode)
            }
            /** Used when loading a Scene in a player. */
            enum LoadSceneMode
            { Single = 0, Additive = 1 }
            /** Provides options for 2D and 3D local physics. */
            enum LocalPhysicsMode
            { None = 0, Physics2D = 1, Physics3D = 2 }
            /** Scene management at run-time. */
            class SceneManager extends System.Object
            {
                protected [__keep_incompatibility]: never;
                /** The total number of currently loaded Scenes. */
                public static get sceneCount(): number;
                /** Number of Scenes in Build Settings. */
                public static get sceneCountInBuildSettings(): number;
                public static GetActiveScene () : UnityEngine.SceneManagement.Scene
                /** Set the Scene to be active.
                * @param scene The Scene to be set.
                * @returns Returns false if the Scene is not loaded yet. 
                */
                public static SetActiveScene ($scene: UnityEngine.SceneManagement.Scene) : boolean
                /** Searches all Scenes loaded for a Scene that has the given asset path.
                * @param scenePath Path of the Scene. Should be relative to the project folder. Like: "AssetsMyScenesMyScene.unity".
                * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
                */
                public static GetSceneByPath ($scenePath: string) : UnityEngine.SceneManagement.Scene
                /** Searches through the Scenes loaded for a Scene with the given name.
                * @param name Name of Scene to find.
                * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
                */
                public static GetSceneByName ($name: string) : UnityEngine.SceneManagement.Scene
                /** Get a Scene struct from a build index.
                * @param buildIndex Build index as shown in the Build Settings window.
                * @returns A reference to the Scene, if valid. If not, an invalid Scene is returned. 
                */
                public static GetSceneByBuildIndex ($buildIndex: number) : UnityEngine.SceneManagement.Scene
                /** Get the Scene at index in the SceneManager's list of loaded Scenes.
                * @param index Index of the Scene to get. Index must be greater than or equal to 0 and less than SceneManager.sceneCount.
                * @returns A reference to the Scene at the index specified. 
                */
                public static GetSceneAt ($index: number) : UnityEngine.SceneManagement.Scene
                /** Create an empty new Scene at runtime with the given name.
                * @param sceneName The name of the new Scene. It cannot be empty or null, or same as the name of the existing Scenes.
                * @param parameters Various parameters used to create the Scene.
                * @returns A reference to the new Scene that was created, or an invalid Scene if creation failed. 
                */
                public static CreateScene ($sceneName: string, $parameters: UnityEngine.SceneManagement.CreateSceneParameters) : UnityEngine.SceneManagement.Scene
                /** This will merge the source Scene into the destinationScene. * @param sourceScene The Scene that will be merged into the destination Scene.
                * @param destinationScene Existing Scene to merge the source Scene into.
                */
                public static MergeScenes ($sourceScene: UnityEngine.SceneManagement.Scene, $destinationScene: UnityEngine.SceneManagement.Scene) : void
                /** Move a GameObject from its current Scene to a new Scene. * @param go GameObject to move.
                * @param scene Scene to move into.
                */
                public static MoveGameObjectToScene ($go: UnityEngine.GameObject, $scene: UnityEngine.SceneManagement.Scene) : void
                public static add_sceneLoaded ($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>) : void
                public static remove_sceneLoaded ($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.LoadSceneMode>) : void
                public static add_sceneUnloaded ($value: UnityEngine.Events.UnityAction$1<UnityEngine.SceneManagement.Scene>) : void
                public static remove_sceneUnloaded ($value: UnityEngine.Events.UnityAction$1<UnityEngine.SceneManagement.Scene>) : void
                public static add_activeSceneChanged ($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>) : void
                public static remove_activeSceneChanged ($value: UnityEngine.Events.UnityAction$2<UnityEngine.SceneManagement.Scene, UnityEngine.SceneManagement.Scene>) : void
                /** Create an empty new Scene at runtime with the given name.
                * @param sceneName The name of the new Scene. It cannot be empty or null, or same as the name of the existing Scenes.
                * @param parameters Various parameters used to create the Scene.
                * @returns A reference to the new Scene that was created, or an invalid Scene if creation failed. 
                */
                public static CreateScene ($sceneName: string) : UnityEngine.SceneManagement.Scene
                /** Loads the Scene by its name or index in Build Settings. * @param sceneName Name or path of the Scene to load.
                * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
                * @param mode Allows you to specify whether or not to load the Scene additively. See SceneManagement.LoadSceneMode for more information about the options.
                */
                public static LoadScene ($sceneName: string, $mode: UnityEngine.SceneManagement.LoadSceneMode) : void
                public static LoadScene ($sceneName: string) : void
                /** Loads the Scene by its name or index in Build Settings.
                * @param sceneName Name or path of the Scene to load.
                * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
                * @param parameters Various parameters used to load the Scene.
                * @returns A handle to the Scene being loaded. 
                */
                public static LoadScene ($sceneName: string, $parameters: UnityEngine.SceneManagement.LoadSceneParameters) : UnityEngine.SceneManagement.Scene
                /** Loads the Scene by its name or index in Build Settings. * @param sceneName Name or path of the Scene to load.
                * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
                * @param mode Allows you to specify whether or not to load the Scene additively. See SceneManagement.LoadSceneMode for more information about the options.
                */
                public static LoadScene ($sceneBuildIndex: number, $mode: UnityEngine.SceneManagement.LoadSceneMode) : void
                public static LoadScene ($sceneBuildIndex: number) : void
                /** Loads the Scene by its name or index in Build Settings.
                * @param sceneName Name or path of the Scene to load.
                * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
                * @param parameters Various parameters used to load the Scene.
                * @returns A handle to the Scene being loaded. 
                */
                public static LoadScene ($sceneBuildIndex: number, $parameters: UnityEngine.SceneManagement.LoadSceneParameters) : UnityEngine.SceneManagement.Scene
                /** Loads the Scene asynchronously in the background.
                * @param sceneName Name or path of the Scene to load.
                * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
                * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
                * @param parameters Struct that collects the various parameters into a single place except for the name and index.
                * @returns Use the AsyncOperation to determine if the operation has completed. 
                */
                public static LoadSceneAsync ($sceneBuildIndex: number, $mode: UnityEngine.SceneManagement.LoadSceneMode) : UnityEngine.AsyncOperation
                public static LoadSceneAsync ($sceneBuildIndex: number) : UnityEngine.AsyncOperation
                /** Loads the Scene asynchronously in the background.
                * @param sceneName Name or path of the Scene to load.
                * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
                * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
                * @param parameters Struct that collects the various parameters into a single place except for the name and index.
                * @returns Use the AsyncOperation to determine if the operation has completed. 
                */
                public static LoadSceneAsync ($sceneBuildIndex: number, $parameters: UnityEngine.SceneManagement.LoadSceneParameters) : UnityEngine.AsyncOperation
                /** Loads the Scene asynchronously in the background.
                * @param sceneName Name or path of the Scene to load.
                * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
                * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
                * @param parameters Struct that collects the various parameters into a single place except for the name and index.
                * @returns Use the AsyncOperation to determine if the operation has completed. 
                */
                public static LoadSceneAsync ($sceneName: string, $mode: UnityEngine.SceneManagement.LoadSceneMode) : UnityEngine.AsyncOperation
                public static LoadSceneAsync ($sceneName: string) : UnityEngine.AsyncOperation
                /** Loads the Scene asynchronously in the background.
                * @param sceneName Name or path of the Scene to load.
                * @param sceneBuildIndex Index of the Scene in the Build Settings to load.
                * @param mode If LoadSceneMode.Single then all current Scenes will be unloaded before loading.
                * @param parameters Struct that collects the various parameters into a single place except for the name and index.
                * @returns Use the AsyncOperation to determine if the operation has completed. 
                */
                public static LoadSceneAsync ($sceneName: string, $parameters: UnityEngine.SceneManagement.LoadSceneParameters) : UnityEngine.AsyncOperation
                /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
                * @param sceneBuildIndex Index of the Scene in BuildSettings.
                * @param sceneName Name or path of the Scene to unload.
                * @param scene Scene to unload.
                * @param options Scene unloading options.
                * @returns Use the AsyncOperation to determine if the operation has completed. 
                */
                public static UnloadSceneAsync ($sceneBuildIndex: number) : UnityEngine.AsyncOperation
                /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
                * @param sceneBuildIndex Index of the Scene in BuildSettings.
                * @param sceneName Name or path of the Scene to unload.
                * @param scene Scene to unload.
                * @param options Scene unloading options.
                * @returns Use the AsyncOperation to determine if the operation has completed. 
                */
                public static UnloadSceneAsync ($sceneName: string) : UnityEngine.AsyncOperation
                /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
                * @param sceneBuildIndex Index of the Scene in BuildSettings.
                * @param sceneName Name or path of the Scene to unload.
                * @param scene Scene to unload.
                * @param options Scene unloading options.
                * @returns Use the AsyncOperation to determine if the operation has completed. 
                */
                public static UnloadSceneAsync ($scene: UnityEngine.SceneManagement.Scene) : UnityEngine.AsyncOperation
                /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
                * @param sceneBuildIndex Index of the Scene in BuildSettings.
                * @param sceneName Name or path of the Scene to unload.
                * @param scene Scene to unload.
                * @param options Scene unloading options.
                * @returns Use the AsyncOperation to determine if the operation has completed. 
                */
                public static UnloadSceneAsync ($sceneBuildIndex: number, $options: UnityEngine.SceneManagement.UnloadSceneOptions) : UnityEngine.AsyncOperation
                /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
                * @param sceneBuildIndex Index of the Scene in BuildSettings.
                * @param sceneName Name or path of the Scene to unload.
                * @param scene Scene to unload.
                * @param options Scene unloading options.
                * @returns Use the AsyncOperation to determine if the operation has completed. 
                */
                public static UnloadSceneAsync ($sceneName: string, $options: UnityEngine.SceneManagement.UnloadSceneOptions) : UnityEngine.AsyncOperation
                /** Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager.
                * @param sceneBuildIndex Index of the Scene in BuildSettings.
                * @param sceneName Name or path of the Scene to unload.
                * @param scene Scene to unload.
                * @param options Scene unloading options.
                * @returns Use the AsyncOperation to determine if the operation has completed. 
                */
                public static UnloadSceneAsync ($scene: UnityEngine.SceneManagement.Scene, $options: UnityEngine.SceneManagement.UnloadSceneOptions) : UnityEngine.AsyncOperation
                public constructor ()
            }
            /** This struct collects all the CreateScene parameters in to a single place. */
            class CreateSceneParameters extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Scene unloading options passed to SceneManager.UnloadScene. */
            enum UnloadSceneOptions
            { None = 0, UnloadAllEmbeddedSceneObjects = 1 }
        }
        namespace System.IO {
            class Stream extends System.MarshalByRefObject implements System.IAsyncDisposable, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class DirectoryInfo extends System.IO.FileSystemInfo implements System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            class FileSystemInfo extends System.MarshalByRefObject implements System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.UI {
            class Graphic extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ICanvasElement
            {
                protected [__keep_incompatibility]: never;
                public static get defaultGraphicMaterial(): UnityEngine.Material;
                public get color(): UnityEngine.Color;
                public set color(value: UnityEngine.Color);
                public get raycastTarget(): boolean;
                public set raycastTarget(value: boolean);
                public get raycastPadding(): UnityEngine.Vector4;
                public set raycastPadding(value: UnityEngine.Vector4);
                public get depth(): number;
                public get rectTransform(): UnityEngine.RectTransform;
                public get canvas(): UnityEngine.Canvas;
                public get canvasRenderer(): UnityEngine.CanvasRenderer;
                public get defaultMaterial(): UnityEngine.Material;
                public get material(): UnityEngine.Material;
                public set material(value: UnityEngine.Material);
                public get materialForRendering(): UnityEngine.Material;
                public get mainTexture(): UnityEngine.Texture;
                public SetAllDirty () : void
                public SetLayoutDirty () : void
                public SetVerticesDirty () : void
                public SetMaterialDirty () : void
                public OnCullingChanged () : void
                public Rebuild ($update: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public OnRebuildRequested () : void
                public SetNativeSize () : void
                public Raycast ($sp: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
                public PixelAdjustPoint ($point: UnityEngine.Vector2) : UnityEngine.Vector2
                public GetPixelAdjustedRect () : UnityEngine.Rect
                public CrossFadeColor ($targetColor: UnityEngine.Color, $duration: number, $ignoreTimeScale: boolean, $useAlpha: boolean) : void
                public CrossFadeColor ($targetColor: UnityEngine.Color, $duration: number, $ignoreTimeScale: boolean, $useAlpha: boolean, $useRGB: boolean) : void
                public CrossFadeAlpha ($alpha: number, $duration: number, $ignoreTimeScale: boolean) : void
                public RegisterDirtyLayoutCallback ($action: UnityEngine.Events.UnityAction) : void
                public UnregisterDirtyLayoutCallback ($action: UnityEngine.Events.UnityAction) : void
                public RegisterDirtyVerticesCallback ($action: UnityEngine.Events.UnityAction) : void
                public UnregisterDirtyVerticesCallback ($action: UnityEngine.Events.UnityAction) : void
                public RegisterDirtyMaterialCallback ($action: UnityEngine.Events.UnityAction) : void
                public UnregisterDirtyMaterialCallback ($action: UnityEngine.Events.UnityAction) : void
            }
            interface ICanvasElement
            {
            }
            enum CanvasUpdate
            { Prelayout = 0, Layout = 1, PostLayout = 2, PreRender = 3, LatePreRender = 4, MaxUpdateValue = 5 }
            class Image extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.ICanvasRaycastFilter, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.ISerializationCallbackReceiver, UnityEngine.UI.IClippable
            {
                protected [__keep_incompatibility]: never;
                public get sprite(): UnityEngine.Sprite;
                public set sprite(value: UnityEngine.Sprite);
                public get overrideSprite(): UnityEngine.Sprite;
                public set overrideSprite(value: UnityEngine.Sprite);
                public get type(): UnityEngine.UI.Image.Type;
                public set type(value: UnityEngine.UI.Image.Type);
                public get preserveAspect(): boolean;
                public set preserveAspect(value: boolean);
                public get fillCenter(): boolean;
                public set fillCenter(value: boolean);
                public get fillMethod(): UnityEngine.UI.Image.FillMethod;
                public set fillMethod(value: UnityEngine.UI.Image.FillMethod);
                public get fillAmount(): number;
                public set fillAmount(value: number);
                public get fillClockwise(): boolean;
                public set fillClockwise(value: boolean);
                public get fillOrigin(): number;
                public set fillOrigin(value: number);
                public get alphaHitTestMinimumThreshold(): number;
                public set alphaHitTestMinimumThreshold(value: number);
                public get useSpriteMesh(): boolean;
                public set useSpriteMesh(value: boolean);
                public static get defaultETC1GraphicMaterial(): UnityEngine.Material;
                public get mainTexture(): UnityEngine.Texture;
                public get hasBorder(): boolean;
                public get pixelsPerUnitMultiplier(): number;
                public set pixelsPerUnitMultiplier(value: number);
                public get pixelsPerUnit(): number;
                public get material(): UnityEngine.Material;
                public set material(value: UnityEngine.Material);
                public get minWidth(): number;
                public get preferredWidth(): number;
                public get flexibleWidth(): number;
                public get minHeight(): number;
                public get preferredHeight(): number;
                public get flexibleHeight(): number;
                public get layoutPriority(): number;
                public DisableSpriteOptimizations () : void
                public OnBeforeSerialize () : void
                public OnAfterDeserialize () : void
                public CalculateLayoutInputHorizontal () : void
                public CalculateLayoutInputVertical () : void
                public IsRaycastLocationValid ($screenPoint: UnityEngine.Vector2, $eventCamera: UnityEngine.Camera) : boolean
            }
            class MaskableGraphic extends UnityEngine.UI.Graphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.IClippable
            {
                protected [__keep_incompatibility]: never;
            }
            interface IMaterialModifier
            {
            }
            interface IMaskable
            {
            }
            interface IClippable
            {
            }
            interface ILayoutElement
            {
            }
            class Button extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler
            {
                protected [__keep_incompatibility]: never;
                public get onClick(): UnityEngine.UI.Button.ButtonClickedEvent;
                public set onClick(value: UnityEngine.UI.Button.ButtonClickedEvent);
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            }
            class Selectable extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
            {
                protected [__keep_incompatibility]: never;
            }
            class Toggle extends UnityEngine.UI.Selectable implements UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler, UnityEngine.EventSystems.ISubmitHandler, UnityEngine.EventSystems.IPointerClickHandler
            {
                protected [__keep_incompatibility]: never;
                public toggleTransition : UnityEngine.UI.Toggle.ToggleTransition
                public graphic : UnityEngine.UI.Graphic
                public onValueChanged : UnityEngine.UI.Toggle.ToggleEvent
                public get group(): UnityEngine.UI.ToggleGroup;
                public set group(value: UnityEngine.UI.ToggleGroup);
                public get isOn(): boolean;
                public set isOn(value: boolean);
                public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public SetIsOnWithoutNotify ($value: boolean) : void
                public OnPointerClick ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnSubmit ($eventData: UnityEngine.EventSystems.BaseEventData) : void
            }
            class ToggleGroup extends UnityEngine.EventSystems.UIBehaviour
            {
                protected [__keep_incompatibility]: never;
                public get allowSwitchOff(): boolean;
                public set allowSwitchOff(value: boolean);
                public NotifyToggleOn ($toggle: UnityEngine.UI.Toggle, $sendCallback?: boolean) : void
                public UnregisterToggle ($toggle: UnityEngine.UI.Toggle) : void
                public RegisterToggle ($toggle: UnityEngine.UI.Toggle) : void
                public EnsureValidState () : void
                public AnyTogglesOn () : boolean
                public ActiveToggles () : System.Collections.Generic.IEnumerable$1<UnityEngine.UI.Toggle>
                public GetFirstActiveToggle () : UnityEngine.UI.Toggle
                public SetAllTogglesOff ($sendCallback?: boolean) : void
            }
            class Slider extends UnityEngine.UI.Selectable implements UnityEngine.EventSystems.IInitializePotentialDragHandler, UnityEngine.EventSystems.IDragHandler, UnityEngine.UI.ICanvasElement, UnityEngine.EventSystems.IEventSystemHandler, UnityEngine.EventSystems.IPointerEnterHandler, UnityEngine.EventSystems.ISelectHandler, UnityEngine.EventSystems.IPointerExitHandler, UnityEngine.EventSystems.IDeselectHandler, UnityEngine.EventSystems.IPointerDownHandler, UnityEngine.EventSystems.IPointerUpHandler, UnityEngine.EventSystems.IMoveHandler
            {
                protected [__keep_incompatibility]: never;
                public get fillRect(): UnityEngine.RectTransform;
                public set fillRect(value: UnityEngine.RectTransform);
                public get handleRect(): UnityEngine.RectTransform;
                public set handleRect(value: UnityEngine.RectTransform);
                public get direction(): UnityEngine.UI.Slider.Direction;
                public set direction(value: UnityEngine.UI.Slider.Direction);
                public get minValue(): number;
                public set minValue(value: number);
                public get maxValue(): number;
                public set maxValue(value: number);
                public get wholeNumbers(): boolean;
                public set wholeNumbers(value: boolean);
                public get value(): number;
                public set value(value: number);
                public get normalizedValue(): number;
                public set normalizedValue(value: number);
                public get onValueChanged(): UnityEngine.UI.Slider.SliderEvent;
                public set onValueChanged(value: UnityEngine.UI.Slider.SliderEvent);
                public SetValueWithoutNotify ($input: number) : void
                public Rebuild ($executing: UnityEngine.UI.CanvasUpdate) : void
                public LayoutComplete () : void
                public GraphicUpdateComplete () : void
                public OnDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public OnInitializePotentialDrag ($eventData: UnityEngine.EventSystems.PointerEventData) : void
                public SetDirection ($direction: UnityEngine.UI.Slider.Direction, $includeRectLayouts: boolean) : void
            }
        }
        namespace UnityEngine.EventSystems {
            class UIBehaviour extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            interface IEventSystemHandler
            {
            }
            interface IPointerEnterHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface ISelectHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerExitHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IDeselectHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerDownHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerUpHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IMoveHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface ISubmitHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IPointerClickHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            class PointerEventData extends UnityEngine.EventSystems.BaseEventData
            {
                protected [__keep_incompatibility]: never;
            }
            class BaseEventData extends UnityEngine.EventSystems.AbstractEventData
            {
                protected [__keep_incompatibility]: never;
            }
            class AbstractEventData extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            interface IInitializePotentialDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            interface IDragHandler extends UnityEngine.EventSystems.IEventSystemHandler
            {
            }
            class AxisEventData extends UnityEngine.EventSystems.BaseEventData
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Events {
            /** Zero argument delegate used by UnityEvents. */
            interface UnityAction
            { 
            () : void; 
            Invoke?: () => void;
            }
            var UnityAction: { new (func: () => void): UnityAction; }
            /** A zero argument persistent callback that can be saved with the Scene. */
            class UnityEvent extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                /** Add a non persistent listener to the UnityEvent. * @param call Callback function.
                */
                public AddListener ($call: UnityEngine.Events.UnityAction) : void
                /** Remove a non persistent listener from the UnityEvent. If you have added the same listener multiple times, this method will remove all occurrences of it. * @param call Callback function.
                */
                public RemoveListener ($call: UnityEngine.Events.UnityAction) : void
                public Invoke () : void
                public constructor ()
            }
            /** Abstract base class for UnityEvents. */
            class UnityEventBase extends System.Object implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public GetPersistentEventCount () : number
                /** Get the target component of the listener at index index. * @param index Index of the listener to query.
                */
                public GetPersistentTarget ($index: number) : UnityEngine.Object
                /** Get the target method name of the listener at index index. * @param index Index of the listener to query.
                */
                public GetPersistentMethodName ($index: number) : string
                /** Modify the execution state of a persistent listener. * @param index Index of the listener to query.
                * @param state State to set.
                */
                public SetPersistentListenerState ($index: number, $state: UnityEngine.Events.UnityEventCallState) : void
                /** Returns the execution state of a persistent listener.
                * @param index Index of the listener to query.
                * @returns Execution state of the persistent listener. 
                */
                public GetPersistentListenerState ($index: number) : UnityEngine.Events.UnityEventCallState
                public RemoveAllListeners () : void
                /** Given an object, function name, and a list of argument types; find the method that matches. * @param obj Object to search for the method.
                * @param functionName Function name to search for.
                * @param argumentTypes Argument types for the function.
                */
                public static GetValidMethodInfo ($obj: any, $functionName: string, $argumentTypes: System.Array$1<System.Type>) : System.Reflection.MethodInfo
                /** Given an object type, function name, and a list of argument types; find the method that matches. * @param objectType Object type to search for the method.
                * @param functionName Function name to search for.
                * @param argumentTypes Argument types for the function.
                */
                public static GetValidMethodInfo ($objectType: System.Type, $functionName: string, $argumentTypes: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            }
            class UnityEvent$1<T0> extends UnityEngine.Events.UnityEventBase implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
            /** Controls the scope of UnityEvent callbacks. */
            enum UnityEventCallState
            { Off = 0, EditorAndRuntime = 1, RuntimeOnly = 2 }
            interface UnityAction$2<T0, T1>
            { 
            (arg0: T0, arg1: T1) : void; 
            Invoke?: (arg0: T0, arg1: T1) => void;
            }
            interface UnityAction$1<T0>
            { 
            (arg0: T0) : void; 
            Invoke?: (arg0: T0) => void;
            }
        }
        namespace UnityEngine.UI.Image {
            enum Type
            { Simple = 0, Sliced = 1, Tiled = 2, Filled = 3 }
            enum FillMethod
            { Horizontal = 0, Vertical = 1, Radial90 = 2, Radial180 = 3, Radial360 = 4 }
        }
        namespace UnityEngine.UI.Button {
            class ButtonClickedEvent extends UnityEngine.Events.UnityEvent implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
                public constructor ()
            }
        }
        namespace UnityEngine.UI.Toggle {
            enum ToggleTransition
            { None = 0, Fade = 1 }
            class ToggleEvent extends UnityEngine.Events.UnityEvent$1<boolean> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.UI.Slider {
            enum Direction
            { LeftToRight = 0, RightToLeft = 1, BottomToTop = 2, TopToBottom = 3 }
            class SliderEvent extends UnityEngine.Events.UnityEvent$1<number> implements UnityEngine.ISerializationCallbackReceiver
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.Video {
            /** Plays video content onto a target. */
            class VideoPlayer extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                /** The source that the VideoPlayer uses for playback. */
                public get source(): UnityEngine.Video.VideoSource;
                public set source(value: UnityEngine.Video.VideoSource);
                /** The file or HTTP URL that the VideoPlayer reads content from. */
                public get url(): string;
                public set url(value: string);
                /** The clip being played by the VideoPlayer. */
                public get clip(): UnityEngine.Video.VideoClip;
                public set clip(value: UnityEngine.Video.VideoClip);
                /** Where the video content will be drawn. */
                public get renderMode(): UnityEngine.Video.VideoRenderMode;
                public set renderMode(value: UnityEngine.Video.VideoRenderMode);
                /** Camera component to draw to when Video.VideoPlayer.renderMode is set to either Video.VideoRenderMode.CameraFarPlane or Video.VideoRenderMode.CameraNearPlane. */
                public get targetCamera(): UnityEngine.Camera;
                public set targetCamera(value: UnityEngine.Camera);
                /** RenderTexture to draw to when Video.VideoPlayer.renderMode is set to Video.VideoTarget.RenderTexture. */
                public get targetTexture(): UnityEngine.RenderTexture;
                public set targetTexture(value: UnityEngine.RenderTexture);
                /** Renderer which is targeted when Video.VideoPlayer.renderMode is set to Video.VideoTarget.MaterialOverride */
                public get targetMaterialRenderer(): UnityEngine.Renderer;
                public set targetMaterialRenderer(value: UnityEngine.Renderer);
                /** Material texture property which is targeted when Video.VideoPlayer.renderMode is set to Video.VideoTarget.MaterialOverride. */
                public get targetMaterialProperty(): string;
                public set targetMaterialProperty(value: string);
                /** Defines how the video content will be stretched to fill the target area. */
                public get aspectRatio(): UnityEngine.Video.VideoAspectRatio;
                public set aspectRatio(value: UnityEngine.Video.VideoAspectRatio);
                /** Overall transparency level of the target camera plane video. */
                public get targetCameraAlpha(): number;
                public set targetCameraAlpha(value: number);
                /** Type of 3D content contained in the source video media. */
                public get targetCamera3DLayout(): UnityEngine.Video.Video3DLayout;
                public set targetCamera3DLayout(value: UnityEngine.Video.Video3DLayout);
                /** Internal texture in which video content is placed. (Read Only) */
                public get texture(): UnityEngine.Texture;
                /** Whether the VideoPlayer has successfully prepared the content to be played. (Read Only) */
                public get isPrepared(): boolean;
                /** Determines whether the VideoPlayer will wait for the first frame to be loaded into the texture before starting playback when Video.VideoPlayer.playOnAwake is on. */
                public get waitForFirstFrame(): boolean;
                public set waitForFirstFrame(value: boolean);
                /** Whether the content will start playing back as soon as the component awakes. */
                public get playOnAwake(): boolean;
                public set playOnAwake(value: boolean);
                /** Whether content is being played. (Read Only) */
                public get isPlaying(): boolean;
                /** Whether playback is paused. (Read Only) */
                public get isPaused(): boolean;
                /** Whether current time can be changed using the time or timeFrames property. (Read Only) */
                public get canSetTime(): boolean;
                /** The presentation time of the currently available frame in VideoPlayer.texture. */
                public get time(): number;
                public set time(value: number);
                /** The frame index of the currently available frame in VideoPlayer.texture. */
                public get frame(): bigint;
                public set frame(value: bigint);
                /** The clock time that the VideoPlayer follows to schedule its samples. The clock time is expressed in seconds. (Read Only) */
                public get clockTime(): number;
                /** Returns true if the VideoPlayer can step forward through the video content. (Read Only) */
                public get canStep(): boolean;
                /** Whether the playback speed can be changed. (Read Only) */
                public get canSetPlaybackSpeed(): boolean;
                /** Factor by which the basic playback rate will be multiplied. */
                public get playbackSpeed(): number;
                public set playbackSpeed(value: number);
                /** Determines whether the VideoPlayer restarts from the beginning when it reaches the end of the clip. */
                public get isLooping(): boolean;
                public set isLooping(value: boolean);
                /** Whether the time source followed by the VideoPlayer can be changed. (Read Only) */
                public get canSetTimeSource(): boolean;
                /** [NOT YET IMPLEMENTED] The source used used by the VideoPlayer to derive its current time. */
                public get timeSource(): UnityEngine.Video.VideoTimeSource;
                public set timeSource(value: UnityEngine.Video.VideoTimeSource);
                /** The clock that the Video.VideoPlayer observes to detect and correct drift. */
                public get timeReference(): UnityEngine.Video.VideoTimeReference;
                public set timeReference(value: UnityEngine.Video.VideoTimeReference);
                /** Reference time of the external clock the Video.VideoPlayer uses to correct its drift. */
                public get externalReferenceTime(): number;
                public set externalReferenceTime(value: number);
                /** Whether frame-skipping to maintain synchronization can be controlled. (Read Only) */
                public get canSetSkipOnDrop(): boolean;
                /** Whether the VideoPlayer is allowed to skip frames to catch up with current time. */
                public get skipOnDrop(): boolean;
                public set skipOnDrop(value: boolean);
                /** Number of frames in the current video content. (Read Only) */
                public get frameCount(): bigint;
                /** The frame rate of the clip or URL in frames/second. (Read Only) */
                public get frameRate(): number;
                /** The length of the VideoClip, or the URL, in seconds. (Read Only) */
                public get length(): number;
                /** The width of the images in the VideoClip, or URL, in pixels. (Read Only) */
                public get width(): number;
                /** The height of the images in the VideoClip, or URL, in pixels. (Read Only) */
                public get height(): number;
                /** Numerator of the pixel aspect ratio (num:den) for the VideoClip or the URL. (Read Only) */
                public get pixelAspectRatioNumerator(): number;
                /** Denominator of the pixel aspect ratio (num:den) for the VideoClip or the URL. (Read Only) */
                public get pixelAspectRatioDenominator(): number;
                /** Number of audio tracks found in the data source currently configured. (Read Only) */
                public get audioTrackCount(): number;
                /** Maximum number of audio tracks that can be controlled. (Read Only) */
                public static get controlledAudioTrackMaxCount(): number;
                /** Number of audio tracks that this VideoPlayer will take control of. */
                public get controlledAudioTrackCount(): number;
                public set controlledAudioTrackCount(value: number);
                /** Destination for the audio embedded in the video. */
                public get audioOutputMode(): UnityEngine.Video.VideoAudioOutputMode;
                public set audioOutputMode(value: UnityEngine.Video.VideoAudioOutputMode);
                /** Whether direct-output volume controls are supported for the current platform and video format. (Read Only) */
                public get canSetDirectAudioVolume(): boolean;
                /** Enables the frameReady events. */
                public get sendFrameReadyEvents(): boolean;
                public set sendFrameReadyEvents(value: boolean);
                public Prepare () : void
                public Play () : void
                public Pause () : void
                public Stop () : void
                public StepForward () : void
                /** Returns the language code, if any, for the specified track.
                * @param trackIndex Index of the audio track to query.
                * @returns Language code. 
                */
                public GetAudioLanguageCode ($trackIndex: number) : string
                /** The number of audio channels in the specified audio track.
                * @param trackIndex Index for the audio track being queried.
                * @returns Number of audio channels. 
                */
                public GetAudioChannelCount ($trackIndex: number) : number
                /** Gets the audio track sampling rate in Hertz.
                * @param trackIndex Index of the audio track to query.
                * @returns The sampling rate in Hertz. 
                */
                public GetAudioSampleRate ($trackIndex: number) : number
                /** Enable/disable audio track decoding. Only effective when the VideoPlayer is not currently playing. * @param trackIndex Index of the audio track to enable/disable.
                * @param enabled True for enabling the track. False for disabling the track.
                */
                public EnableAudioTrack ($trackIndex: number, $enabled: boolean) : void
                /** Whether decoding for the specified audio track is enabled. See Video.VideoPlayer.EnableAudioTrack for distinction with mute.
                * @param trackIndex Index of the audio track being queried.
                * @returns Returns true if decoding for the specified audio track is enabled. 
                */
                public IsAudioTrackEnabled ($trackIndex: number) : boolean
                /** Return the direct-output volume for specified track.
                * @param trackIndex Track index for which the volume is queried.
                * @returns Volume, between 0 and 1. 
                */
                public GetDirectAudioVolume ($trackIndex: number) : number
                /** Set the direct-output audio volume for the specified track. * @param trackIndex Track index for which the volume is set.
                * @param volume New volume, between 0 and 1.
                */
                public SetDirectAudioVolume ($trackIndex: number, $volume: number) : void
                /** Gets the direct-output audio mute status for the specified track. */
                public GetDirectAudioMute ($trackIndex: number) : boolean
                /** Set the direct-output audio mute status for the specified track. * @param trackIndex Track index for which the mute is set.
                * @param mute Mute on/off.
                */
                public SetDirectAudioMute ($trackIndex: number, $mute: boolean) : void
                /** Gets the AudioSource that will receive audio samples for the specified track if Video.VideoPlayer.audioOutputMode is set to Video.VideoAudioOutputMode.AudioSource.
                * @param trackIndex Index of the audio track for which the AudioSource is wanted.
                * @returns The source associated with the audio track. 
                */
                public GetTargetAudioSource ($trackIndex: number) : UnityEngine.AudioSource
                /** Sets the AudioSource that will receive audio samples for the specified track if this audio target is selected with Video.VideoPlayer.audioOutputMode. * @param trackIndex Index of the audio track to associate with the specified AudioSource.
                * @param source AudioSource to associate with the audio track.
                */
                public SetTargetAudioSource ($trackIndex: number, $source: UnityEngine.AudioSource) : void
                public add_prepareCompleted ($value: UnityEngine.Video.VideoPlayer.EventHandler) : void
                public remove_prepareCompleted ($value: UnityEngine.Video.VideoPlayer.EventHandler) : void
                public add_loopPointReached ($value: UnityEngine.Video.VideoPlayer.EventHandler) : void
                public remove_loopPointReached ($value: UnityEngine.Video.VideoPlayer.EventHandler) : void
                public add_started ($value: UnityEngine.Video.VideoPlayer.EventHandler) : void
                public remove_started ($value: UnityEngine.Video.VideoPlayer.EventHandler) : void
                public add_frameDropped ($value: UnityEngine.Video.VideoPlayer.EventHandler) : void
                public remove_frameDropped ($value: UnityEngine.Video.VideoPlayer.EventHandler) : void
                public add_errorReceived ($value: UnityEngine.Video.VideoPlayer.ErrorEventHandler) : void
                public remove_errorReceived ($value: UnityEngine.Video.VideoPlayer.ErrorEventHandler) : void
                public add_seekCompleted ($value: UnityEngine.Video.VideoPlayer.EventHandler) : void
                public remove_seekCompleted ($value: UnityEngine.Video.VideoPlayer.EventHandler) : void
                public add_clockResyncOccurred ($value: UnityEngine.Video.VideoPlayer.TimeEventHandler) : void
                public remove_clockResyncOccurred ($value: UnityEngine.Video.VideoPlayer.TimeEventHandler) : void
                public add_frameReady ($value: UnityEngine.Video.VideoPlayer.FrameReadyEventHandler) : void
                public remove_frameReady ($value: UnityEngine.Video.VideoPlayer.FrameReadyEventHandler) : void
                public constructor ()
            }
            /** Source of the video content for a VideoPlayer. */
            enum VideoSource
            { VideoClip = 0, Url = 1 }
            /** A container for video data. */
            class VideoClip extends UnityEngine.Object
            {
                protected [__keep_incompatibility]: never;
                /** The video clip path in the project's assets. (Read Only). */
                public get originalPath(): string;
                /** The length of the VideoClip in frames. (Read Only). */
                public get frameCount(): bigint;
                /** The frame rate of the clip in frames/second. (Read Only). */
                public get frameRate(): number;
                /** The length of the video clip in seconds. (Read Only). */
                public get length(): number;
                /** The width of the images in the video clip in pixels. (Read Only). */
                public get width(): number;
                /** The height of the images in the video clip in pixels. (Read Only). */
                public get height(): number;
                /** Numerator of the pixel aspect ratio (num:den). (Read Only). */
                public get pixelAspectRatioNumerator(): number;
                /** Denominator of the pixel aspect ratio (num:den). (Read Only). */
                public get pixelAspectRatioDenominator(): number;
                /** Whether the imported clip contains sRGB color data (Read Only). */
                public get sRGB(): boolean;
                /** Number of audio tracks in the clip. */
                public get audioTrackCount(): number;
                /** The number of channels in the audio track.  E.g. 2 for a stereo track.
                * @param audioTrackIdx Index of the audio queried audio track.
                * @returns The number of channels. 
                */
                public GetAudioChannelCount ($audioTrackIdx: number) : number
                /** Get the audio track sampling rate in Hertz.
                * @param audioTrackIdx Index of the audio queried audio track.
                * @returns The sampling rate in Hertz. 
                */
                public GetAudioSampleRate ($audioTrackIdx: number) : number
                /** Get the audio track language.  Can be unknown.
                * @param audioTrackIdx Index of the audio queried audio track.
                * @returns The abbreviated name of the language. 
                */
                public GetAudioLanguage ($audioTrackIdx: number) : string
            }
            /** Type of destination for the images read by a VideoPlayer. */
            enum VideoRenderMode
            { CameraFarPlane = 0, CameraNearPlane = 1, RenderTexture = 2, MaterialOverride = 3, APIOnly = 4 }
            /** Methods used to fit a video in the target area. */
            enum VideoAspectRatio
            { NoScaling = 0, FitVertically = 1, FitHorizontally = 2, FitInside = 3, FitOutside = 4, Stretch = 5 }
            /** Types of 3D content layout within a video. */
            enum Video3DLayout
            { No3D = 0, SideBySide3D = 1, OverUnder3D = 2 }
            /** Time source followed by the Video.VideoPlayer when reading content. */
            enum VideoTimeSource
            { AudioDSPTimeSource = 0, GameTimeSource = 1 }
            /** The clock that the Video.VideoPlayer observes to detect and correct drift. */
            enum VideoTimeReference
            { Freerun = 0, InternalTime = 1, ExternalTime = 2 }
            /** Places where the audio embedded in a video can be sent. */
            enum VideoAudioOutputMode
            { None = 0, AudioSource = 1, Direct = 2, APIOnly = 3 }
        }
        namespace UnityEngine.Video.VideoPlayer {
            interface EventHandler
            { 
            (source: UnityEngine.Video.VideoPlayer) : void; 
            Invoke?: (source: UnityEngine.Video.VideoPlayer) => void;
            }
            var EventHandler: { new (func: (source: UnityEngine.Video.VideoPlayer) => void): EventHandler; }
            interface ErrorEventHandler
            { 
            (source: UnityEngine.Video.VideoPlayer, message: string) : void; 
            Invoke?: (source: UnityEngine.Video.VideoPlayer, message: string) => void;
            }
            var ErrorEventHandler: { new (func: (source: UnityEngine.Video.VideoPlayer, message: string) => void): ErrorEventHandler; }
            interface TimeEventHandler
            { 
            (source: UnityEngine.Video.VideoPlayer, seconds: number) : void; 
            Invoke?: (source: UnityEngine.Video.VideoPlayer, seconds: number) => void;
            }
            var TimeEventHandler: { new (func: (source: UnityEngine.Video.VideoPlayer, seconds: number) => void): TimeEventHandler; }
            interface FrameReadyEventHandler
            { 
            (source: UnityEngine.Video.VideoPlayer, frameIdx: bigint) : void; 
            Invoke?: (source: UnityEngine.Video.VideoPlayer, frameIdx: bigint) => void;
            }
            var FrameReadyEventHandler: { new (func: (source: UnityEngine.Video.VideoPlayer, frameIdx: bigint) => void): FrameReadyEventHandler; }
        }
        namespace UnityEngine.Playables {
            /** Use the PlayableGraph to manage Playable creations and destructions. */
            class PlayableGraph extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace UnityEngine.AI {
            /** Navigation mesh agent. */
            class NavMeshAgent extends UnityEngine.Behaviour
            {
                protected [__keep_incompatibility]: never;
                /** Gets or attempts to set the destination of the agent in world-space units. */
                public get destination(): UnityEngine.Vector3;
                public set destination(value: UnityEngine.Vector3);
                /** Stop within this distance from the target position. */
                public get stoppingDistance(): number;
                public set stoppingDistance(value: number);
                /** Access the current velocity of the NavMeshAgent component, or set a velocity to control the agent manually. */
                public get velocity(): UnityEngine.Vector3;
                public set velocity(value: UnityEngine.Vector3);
                /** Gets or sets the simulation position of the navmesh agent. */
                public get nextPosition(): UnityEngine.Vector3;
                public set nextPosition(value: UnityEngine.Vector3);
                /** Get the current steering target along the path. (Read Only) */
                public get steeringTarget(): UnityEngine.Vector3;
                /** The desired velocity of the agent including any potential contribution from avoidance. (Read Only) */
                public get desiredVelocity(): UnityEngine.Vector3;
                /** The distance between the agent's position and the destination on the current path. (Read Only) */
                public get remainingDistance(): number;
                /** The relative vertical displacement of the owning GameObject. */
                public get baseOffset(): number;
                public set baseOffset(value: number);
                /** Is the agent currently positioned on an OffMeshLink? (Read Only) */
                public get isOnOffMeshLink(): boolean;
                /** The current OffMeshLinkData. */
                public get currentOffMeshLinkData(): UnityEngine.AI.OffMeshLinkData;
                /** The next OffMeshLinkData on the current path. */
                public get nextOffMeshLinkData(): UnityEngine.AI.OffMeshLinkData;
                /** Should the agent move across OffMeshLinks automatically? */
                public get autoTraverseOffMeshLink(): boolean;
                public set autoTraverseOffMeshLink(value: boolean);
                /** Should the agent brake automatically to avoid overshooting the destination point? */
                public get autoBraking(): boolean;
                public set autoBraking(value: boolean);
                /** Should the agent attempt to acquire a new path if the existing path becomes invalid? */
                public get autoRepath(): boolean;
                public set autoRepath(value: boolean);
                /** Does the agent currently have a path? (Read Only) */
                public get hasPath(): boolean;
                /** Is a path in the process of being computed but not yet ready? (Read Only) */
                public get pathPending(): boolean;
                /** Is the current path stale. (Read Only) */
                public get isPathStale(): boolean;
                /** The status of the current path (complete, partial or invalid). */
                public get pathStatus(): UnityEngine.AI.NavMeshPathStatus;
                public get pathEndPosition(): UnityEngine.Vector3;
                /** This property holds the stop or resume condition of the NavMesh agent. */
                public get isStopped(): boolean;
                public set isStopped(value: boolean);
                /** Property to get and set the current path. */
                public get path(): UnityEngine.AI.NavMeshPath;
                public set path(value: UnityEngine.AI.NavMeshPath);
                /** Returns the owning object of the NavMesh the agent is currently placed on (Read Only). */
                public get navMeshOwner(): UnityEngine.Object;
                /** The type ID for the agent. */
                public get agentTypeID(): number;
                public set agentTypeID(value: number);
                /** Specifies which NavMesh areas are passable. Changing areaMask will make the path stale (see isPathStale). */
                public get areaMask(): number;
                public set areaMask(value: number);
                /** Maximum movement speed when following a path. */
                public get speed(): number;
                public set speed(value: number);
                /** Maximum turning speed in (deg/s) while following a path. */
                public get angularSpeed(): number;
                public set angularSpeed(value: number);
                /** The maximum acceleration of an agent as it follows a path, given in units / sec^2. */
                public get acceleration(): number;
                public set acceleration(value: number);
                /** Gets or sets whether the transform position is synchronized with the simulated agent position. The default value is true. */
                public get updatePosition(): boolean;
                public set updatePosition(value: boolean);
                /** Should the agent update the transform orientation? */
                public get updateRotation(): boolean;
                public set updateRotation(value: boolean);
                /** Allows you to specify whether the agent should be aligned to the up-axis of the NavMesh or link that it is placed on. */
                public get updateUpAxis(): boolean;
                public set updateUpAxis(value: boolean);
                /** The avoidance radius for the agent. */
                public get radius(): number;
                public set radius(value: number);
                /** The height of the agent for purposes of passing under obstacles, etc. */
                public get height(): number;
                public set height(value: number);
                /** The level of quality of avoidance. */
                public get obstacleAvoidanceType(): UnityEngine.AI.ObstacleAvoidanceType;
                public set obstacleAvoidanceType(value: UnityEngine.AI.ObstacleAvoidanceType);
                /** The avoidance priority level. */
                public get avoidancePriority(): number;
                public set avoidancePriority(value: number);
                /** Is the agent currently bound to the navmesh? (Read Only) */
                public get isOnNavMesh(): boolean;
                /** Sets or updates the destination thus triggering the calculation for a new path.
                * @param target The target point to navigate to.
                * @returns True if the destination was requested successfully, otherwise false. 
                */
                public SetDestination ($target: UnityEngine.Vector3) : boolean
                /** Enables or disables the current off-mesh link. * @param activated Is the link activated?
                */
                public ActivateCurrentOffMeshLink ($activated: boolean) : void
                public CompleteOffMeshLink () : void
                /** Warps agent to the provided position.
                * @param newPosition New position to warp the agent to.
                * @returns True if agent is successfully warped, otherwise false. 
                */
                public Warp ($newPosition: UnityEngine.Vector3) : boolean
                /** Apply relative movement to current position. * @param offset The relative movement vector.
                */
                public Move ($offset: UnityEngine.Vector3) : void
                public ResetPath () : void
                /** Assign a new path to this agent.
                * @param path New path to follow.
                * @returns True if the path is succesfully assigned. 
                */
                public SetPath ($path: UnityEngine.AI.NavMeshPath) : boolean
                /** Locate the closest NavMesh edge.
                * @param hit Holds the properties of the resulting location.
                * @returns True if a nearest edge is found. 
                */
                public FindClosestEdge ($hit: $Ref<UnityEngine.AI.NavMeshHit>) : boolean
                /** Trace a straight path towards a target postion in the NavMesh without moving the agent.
                * @param targetPosition The desired end position of movement.
                * @param hit Properties of the obstacle detected by the ray (if any).
                * @returns True if there is an obstacle between the agent and the target position, otherwise false. 
                */
                public Raycast ($targetPosition: UnityEngine.Vector3, $hit: $Ref<UnityEngine.AI.NavMeshHit>) : boolean
                /** Calculate a path to a specified point and store the resulting path.
                * @param targetPosition The final position of the path requested.
                * @param path The resulting path.
                * @returns True if a path is found. 
                */
                public CalculatePath ($targetPosition: UnityEngine.Vector3, $path: UnityEngine.AI.NavMeshPath) : boolean
                /** Sample a position along the current path.
                * @param areaMask A bitfield mask specifying which NavMesh areas can be passed when tracing the path.
                * @param maxDistance Terminate scanning the path at this distance.
                * @param hit Holds the properties of the resulting location.
                * @returns True if terminated before reaching the position at maxDistance, false otherwise. 
                */
                public SamplePathPosition ($areaMask: number, $maxDistance: number, $hit: $Ref<UnityEngine.AI.NavMeshHit>) : boolean
                /** Sets the cost for traversing over areas of the area type. * @param areaIndex Area cost.
                * @param areaCost New cost for the specified area index.
                */
                public SetAreaCost ($areaIndex: number, $areaCost: number) : void
                /** Gets the cost for path calculation when crossing area of a particular type.
                * @param areaIndex Area Index.
                * @returns Current cost for specified area index. 
                */
                public GetAreaCost ($areaIndex: number) : number
                public constructor ()
            }
            /** State of OffMeshLink. */
            class OffMeshLinkData extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Status of path. */
            enum NavMeshPathStatus
            { PathComplete = 0, PathPartial = 1, PathInvalid = 2 }
            /** A path as calculated by the navigation system. */
            class NavMeshPath extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            /** Result information for NavMesh queries. */
            class NavMeshHit extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            /** Level of obstacle avoidance. */
            enum ObstacleAvoidanceType
            { NoObstacleAvoidance = 0, LowQualityObstacleAvoidance = 1, MedQualityObstacleAvoidance = 2, GoodQualityObstacleAvoidance = 3, HighQualityObstacleAvoidance = 4 }
        }
        namespace TMPro {
            class TMP_Text extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.IClippable
            {
                protected [__keep_incompatibility]: never;
                public get text(): string;
                public set text(value: string);
                public get textPreprocessor(): TMPro.ITextPreprocessor;
                public set textPreprocessor(value: TMPro.ITextPreprocessor);
                public get isRightToLeftText(): boolean;
                public set isRightToLeftText(value: boolean);
                public get font(): TMPro.TMP_FontAsset;
                public set font(value: TMPro.TMP_FontAsset);
                public get fontSharedMaterial(): UnityEngine.Material;
                public set fontSharedMaterial(value: UnityEngine.Material);
                public get fontSharedMaterials(): System.Array$1<UnityEngine.Material>;
                public set fontSharedMaterials(value: System.Array$1<UnityEngine.Material>);
                public get fontMaterial(): UnityEngine.Material;
                public set fontMaterial(value: UnityEngine.Material);
                public get fontMaterials(): System.Array$1<UnityEngine.Material>;
                public set fontMaterials(value: System.Array$1<UnityEngine.Material>);
                public get color(): UnityEngine.Color;
                public set color(value: UnityEngine.Color);
                public get alpha(): number;
                public set alpha(value: number);
                public get enableVertexGradient(): boolean;
                public set enableVertexGradient(value: boolean);
                public get colorGradient(): TMPro.VertexGradient;
                public set colorGradient(value: TMPro.VertexGradient);
                public get colorGradientPreset(): TMPro.TMP_ColorGradient;
                public set colorGradientPreset(value: TMPro.TMP_ColorGradient);
                public get spriteAsset(): TMPro.TMP_SpriteAsset;
                public set spriteAsset(value: TMPro.TMP_SpriteAsset);
                public get tintAllSprites(): boolean;
                public set tintAllSprites(value: boolean);
                public get styleSheet(): TMPro.TMP_StyleSheet;
                public set styleSheet(value: TMPro.TMP_StyleSheet);
                public get textStyle(): TMPro.TMP_Style;
                public set textStyle(value: TMPro.TMP_Style);
                public get overrideColorTags(): boolean;
                public set overrideColorTags(value: boolean);
                public get faceColor(): UnityEngine.Color32;
                public set faceColor(value: UnityEngine.Color32);
                public get outlineColor(): UnityEngine.Color32;
                public set outlineColor(value: UnityEngine.Color32);
                public get outlineWidth(): number;
                public set outlineWidth(value: number);
                public get fontSize(): number;
                public set fontSize(value: number);
                public get fontWeight(): TMPro.FontWeight;
                public set fontWeight(value: TMPro.FontWeight);
                public get pixelsPerUnit(): number;
                public get enableAutoSizing(): boolean;
                public set enableAutoSizing(value: boolean);
                public get fontSizeMin(): number;
                public set fontSizeMin(value: number);
                public get fontSizeMax(): number;
                public set fontSizeMax(value: number);
                public get fontStyle(): TMPro.FontStyles;
                public set fontStyle(value: TMPro.FontStyles);
                public get isUsingBold(): boolean;
                public get horizontalAlignment(): TMPro.HorizontalAlignmentOptions;
                public set horizontalAlignment(value: TMPro.HorizontalAlignmentOptions);
                public get verticalAlignment(): TMPro.VerticalAlignmentOptions;
                public set verticalAlignment(value: TMPro.VerticalAlignmentOptions);
                public get alignment(): TMPro.TextAlignmentOptions;
                public set alignment(value: TMPro.TextAlignmentOptions);
                public get characterSpacing(): number;
                public set characterSpacing(value: number);
                public get wordSpacing(): number;
                public set wordSpacing(value: number);
                public get lineSpacing(): number;
                public set lineSpacing(value: number);
                public get lineSpacingAdjustment(): number;
                public set lineSpacingAdjustment(value: number);
                public get paragraphSpacing(): number;
                public set paragraphSpacing(value: number);
                public get characterWidthAdjustment(): number;
                public set characterWidthAdjustment(value: number);
                public get enableWordWrapping(): boolean;
                public set enableWordWrapping(value: boolean);
                public get wordWrappingRatios(): number;
                public set wordWrappingRatios(value: number);
                public get overflowMode(): TMPro.TextOverflowModes;
                public set overflowMode(value: TMPro.TextOverflowModes);
                public get isTextOverflowing(): boolean;
                public get firstOverflowCharacterIndex(): number;
                public get linkedTextComponent(): TMPro.TMP_Text;
                public set linkedTextComponent(value: TMPro.TMP_Text);
                public get isTextTruncated(): boolean;
                public get enableKerning(): boolean;
                public set enableKerning(value: boolean);
                public get extraPadding(): boolean;
                public set extraPadding(value: boolean);
                public get richText(): boolean;
                public set richText(value: boolean);
                public get parseCtrlCharacters(): boolean;
                public set parseCtrlCharacters(value: boolean);
                public get isOverlay(): boolean;
                public set isOverlay(value: boolean);
                public get isOrthographic(): boolean;
                public set isOrthographic(value: boolean);
                public get enableCulling(): boolean;
                public set enableCulling(value: boolean);
                public get ignoreVisibility(): boolean;
                public set ignoreVisibility(value: boolean);
                public get horizontalMapping(): TMPro.TextureMappingOptions;
                public set horizontalMapping(value: TMPro.TextureMappingOptions);
                public get verticalMapping(): TMPro.TextureMappingOptions;
                public set verticalMapping(value: TMPro.TextureMappingOptions);
                public get mappingUvLineOffset(): number;
                public set mappingUvLineOffset(value: number);
                public get renderMode(): TMPro.TextRenderFlags;
                public set renderMode(value: TMPro.TextRenderFlags);
                public get geometrySortingOrder(): TMPro.VertexSortingOrder;
                public set geometrySortingOrder(value: TMPro.VertexSortingOrder);
                public get isTextObjectScaleStatic(): boolean;
                public set isTextObjectScaleStatic(value: boolean);
                public get vertexBufferAutoSizeReduction(): boolean;
                public set vertexBufferAutoSizeReduction(value: boolean);
                public get firstVisibleCharacter(): number;
                public set firstVisibleCharacter(value: number);
                public get maxVisibleCharacters(): number;
                public set maxVisibleCharacters(value: number);
                public get maxVisibleWords(): number;
                public set maxVisibleWords(value: number);
                public get maxVisibleLines(): number;
                public set maxVisibleLines(value: number);
                public get useMaxVisibleDescender(): boolean;
                public set useMaxVisibleDescender(value: boolean);
                public get pageToDisplay(): number;
                public set pageToDisplay(value: number);
                public get margin(): UnityEngine.Vector4;
                public set margin(value: UnityEngine.Vector4);
                public get textInfo(): TMPro.TMP_TextInfo;
                public get havePropertiesChanged(): boolean;
                public set havePropertiesChanged(value: boolean);
                public get isUsingLegacyAnimationComponent(): boolean;
                public set isUsingLegacyAnimationComponent(value: boolean);
                public get transform(): UnityEngine.Transform;
                public get rectTransform(): UnityEngine.RectTransform;
                public get autoSizeTextContainer(): boolean;
                public set autoSizeTextContainer(value: boolean);
                public get mesh(): UnityEngine.Mesh;
                public get isVolumetricText(): boolean;
                public set isVolumetricText(value: boolean);
                public get bounds(): UnityEngine.Bounds;
                public get textBounds(): UnityEngine.Bounds;
                public get flexibleHeight(): number;
                public get flexibleWidth(): number;
                public get minWidth(): number;
                public get minHeight(): number;
                public get maxWidth(): number;
                public get maxHeight(): number;
                public get preferredWidth(): number;
                public get preferredHeight(): number;
                public get renderedWidth(): number;
                public get renderedHeight(): number;
                public get layoutPriority(): number;
                public static add_OnFontAssetRequest ($value: System.Func$3<number, string, TMPro.TMP_FontAsset>) : void
                public static remove_OnFontAssetRequest ($value: System.Func$3<number, string, TMPro.TMP_FontAsset>) : void
                public static add_OnSpriteAssetRequest ($value: System.Func$3<number, string, TMPro.TMP_SpriteAsset>) : void
                public static remove_OnSpriteAssetRequest ($value: System.Func$3<number, string, TMPro.TMP_SpriteAsset>) : void
                public add_OnPreRenderText ($value: System.Action$1<TMPro.TMP_TextInfo>) : void
                public remove_OnPreRenderText ($value: System.Action$1<TMPro.TMP_TextInfo>) : void
                public ForceMeshUpdate ($ignoreActiveState?: boolean, $forceTextReparsing?: boolean) : void
                public UpdateGeometry ($mesh: UnityEngine.Mesh, $index: number) : void
                public UpdateVertexData ($flags: TMPro.TMP_VertexDataUpdateFlags) : void
                public UpdateVertexData () : void
                public SetVertices ($vertices: System.Array$1<UnityEngine.Vector3>) : void
                public UpdateMeshPadding () : void
                public SetText ($sourceText: string, $syncTextInputBox?: boolean) : void
                public SetText ($sourceText: string, $arg0: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number, $arg6: number) : void
                public SetText ($sourceText: string, $arg0: number, $arg1: number, $arg2: number, $arg3: number, $arg4: number, $arg5: number, $arg6: number, $arg7: number) : void
                public SetText ($sourceText: System.Text.StringBuilder) : void
                public SetText ($sourceText: System.Array$1<number>) : void
                public SetText ($sourceText: System.Array$1<number>, $start: number, $length: number) : void
                public SetCharArray ($sourceText: System.Array$1<number>) : void
                public SetCharArray ($sourceText: System.Array$1<number>, $start: number, $length: number) : void
                public GetPreferredValues () : UnityEngine.Vector2
                public GetPreferredValues ($width: number, $height: number) : UnityEngine.Vector2
                public GetPreferredValues ($text: string) : UnityEngine.Vector2
                public GetPreferredValues ($text: string, $width: number, $height: number) : UnityEngine.Vector2
                public GetRenderedValues () : UnityEngine.Vector2
                public GetRenderedValues ($onlyVisibleCharacters: boolean) : UnityEngine.Vector2
                public GetTextInfo ($text: string) : TMPro.TMP_TextInfo
                public ComputeMarginSize () : void
                public ClearMesh () : void
                public ClearMesh ($uploadGeometry: boolean) : void
                public GetParsedText () : string
            }
            interface ITextPreprocessor
            {
            }
            class TMP_FontAsset extends TMPro.TMP_Asset
            {
                protected [__keep_incompatibility]: never;
            }
            class TMP_Asset extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
            class VertexGradient extends System.ValueType
            {
                protected [__keep_incompatibility]: never;
            }
            class TMP_ColorGradient extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
            class TMP_SpriteAsset extends TMPro.TMP_Asset
            {
                protected [__keep_incompatibility]: never;
            }
            class TMP_StyleSheet extends UnityEngine.ScriptableObject
            {
                protected [__keep_incompatibility]: never;
            }
            class TMP_Style extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum FontWeight
            { Thin = 100, ExtraLight = 200, Light = 300, Regular = 400, Medium = 500, SemiBold = 600, Bold = 700, Heavy = 800, Black = 900 }
            enum FontStyles
            { Normal = 0, Bold = 1, Italic = 2, Underline = 4, LowerCase = 8, UpperCase = 16, SmallCaps = 32, Strikethrough = 64, Superscript = 128, Subscript = 256, Highlight = 512 }
            enum HorizontalAlignmentOptions
            { Left = 1, Center = 2, Right = 4, Justified = 8, Flush = 16, Geometry = 32 }
            enum VerticalAlignmentOptions
            { Top = 256, Middle = 512, Bottom = 1024, Baseline = 2048, Geometry = 4096, Capline = 8192 }
            enum TextAlignmentOptions
            { TopLeft = 257, Top = 258, TopRight = 260, TopJustified = 264, TopFlush = 272, TopGeoAligned = 288, Left = 513, Center = 514, Right = 516, Justified = 520, Flush = 528, CenterGeoAligned = 544, BottomLeft = 1025, Bottom = 1026, BottomRight = 1028, BottomJustified = 1032, BottomFlush = 1040, BottomGeoAligned = 1056, BaselineLeft = 2049, Baseline = 2050, BaselineRight = 2052, BaselineJustified = 2056, BaselineFlush = 2064, BaselineGeoAligned = 2080, MidlineLeft = 4097, Midline = 4098, MidlineRight = 4100, MidlineJustified = 4104, MidlineFlush = 4112, MidlineGeoAligned = 4128, CaplineLeft = 8193, Capline = 8194, CaplineRight = 8196, CaplineJustified = 8200, CaplineFlush = 8208, CaplineGeoAligned = 8224, Converted = 65535 }
            enum TextOverflowModes
            { Overflow = 0, Ellipsis = 1, Masking = 2, Truncate = 3, ScrollRect = 4, Page = 5, Linked = 6 }
            enum TextureMappingOptions
            { Character = 0, Line = 1, Paragraph = 2, MatchAspect = 3 }
            enum TextRenderFlags
            { DontRender = 0, Render = 255 }
            enum VertexSortingOrder
            { Normal = 0, Reverse = 1 }
            class TMP_TextInfo extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            enum TMP_VertexDataUpdateFlags
            { None = 0, Vertices = 1, Uv0 = 2, Uv2 = 4, Uv4 = 8, Colors32 = 16, All = 255 }
        }
        namespace System.Text {
            class StringBuilder extends System.Object implements System.Runtime.Serialization.ISerializable
            {
                protected [__keep_incompatibility]: never;
            }
            class Encoding extends System.Object implements System.ICloneable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace Zes {
            class App extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public appInit : Zes.AppInit
                public static get config(): Zes.AppConfig;
                public static get native(): Zes.Native.NativeChannel;
                public static get persistentDataPath(): string;
                public static get inEditor(): boolean;
                public static get loader(): Zes.ResourceLoader;
                public static Restart () : void
                public constructor ()
            }
            class AppInit extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
            }
            class AppConfig extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public name : string
                public appName : string
                public appDisplayName : string
                public appLanguage : string
                public loginServer : string
                public allowGuest : boolean
                public patchServer : string
                public minVersion : string
                public checkUpdate : boolean
                public patchDataPath : string
                public patchInfoFile : string
                public versionInfoFile : string
                public javascriptBundle : string
                public javascriptData : string
                public javascriptEntry : string
                public constructor ()
            }
            class ResourceLoader extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static GetLoader () : Zes.ResourceLoader
                public LoadText ($path: string) : System.Threading.Tasks.Task$1<string>
                public LoadScene ($name: string, $additive: boolean, $progress: System.Action$1<number>) : System.Threading.Tasks.Task$1<UnityEngine.SceneManagement.Scene>
                public LoadBundle ($name: string, $progress?: System.Action$1<number>) : System.Threading.Tasks.Task$1<UnityEngine.AssetBundle>
                public UnloadBundle ($bundle: UnityEngine.AssetBundle) : void
                public UnloadScene ($scene: UnityEngine.SceneManagement.Scene) : System.Threading.Tasks.Task
                public LoadAsset ($bundle: UnityEngine.AssetBundle, $path: string, $type: System.Type) : System.Threading.Tasks.Task$1<UnityEngine.Object>
            }
            class WSConnector extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public onMessage : System.Action$1<string>
                public get connected(): boolean;
                public Open ($url: string, $token: string) : System.Threading.Tasks.Task$1<boolean>
                public Close () : System.Threading.Tasks.Task
                public Send ($message: string) : System.Threading.Tasks.Task
                public constructor ()
            }
            class HttpConnector extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public baseUrl : string
                public SetToken ($token: string) : void
                public Get ($url: string) : System.Threading.Tasks.Task$1<Zes.HttpResult>
                public Post ($url: string, $json: string) : System.Threading.Tasks.Task$1<Zes.HttpResult>
                public constructor ($baseUrl: string)
            }
            class HttpResult extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public error : number
                public message : string
                public data : string
                public constructor ($error: number, $message: string)
                public constructor ($data: string)
            }
            class Tags extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public tags : System.Array$1<Zes.TagData>
                public GetTag ($name: string) : UnityEngine.GameObject
                public constructor ()
            }
            class TagData extends System.Object
            {
                protected [__keep_incompatibility]: never;
            }
            class Util extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public static utf8WithoutBOM : System.Text.Encoding
                public static WaitAsyncOperation ($op: UnityEngine.AsyncOperation, $progress?: System.Action$1<number>) : System.Threading.Tasks.Task
                public static WaitUntil ($condition: System.Func$1<boolean>) : System.Threading.Tasks.Task
                public static Timestamp () : bigint
                public static EnsureDir ($dir: string) : System.IO.DirectoryInfo
                public static EnsureDir ($dir: System.IO.DirectoryInfo) : System.IO.DirectoryInfo
                public static ClearDir ($dir: string) : System.IO.DirectoryInfo
                public static ClearDir ($dir: System.IO.DirectoryInfo) : System.IO.DirectoryInfo
                public static CopyDir ($from: string, $to: string) : void
                public static CopyDir ($from: System.IO.DirectoryInfo, $to: System.IO.DirectoryInfo) : void
                public static CombineUri ($baseUri: string, $path: string) : string
            }
        }
        namespace Zes.Native {
            class NativeChannel extends UnityEngine.MonoBehaviour
            {
                protected [__keep_incompatibility]: never;
                public OnEvent : System.Action$2<string, string>
                public static Create () : Zes.Native.NativeChannel
                public Call ($className: string, $methodName: string, $args?: string) : System.Threading.Tasks.Task$1<Zes.Native.NativeCallState>
                public OnNativeData ($message: string) : void
            }
            class NativeCallState extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public id : number
                public className : string
                public methodName : string
                public args : string
                public result : string
                public status : number
                public error : number
                public constructor ($id: number, $className: string, $methodName: string, $args: string)
            }
            class NativeResponse extends System.Object
            {
                protected [__keep_incompatibility]: never;
                public callId : number
                public method : string
                public error : number
                public message : string
                public constructor ()
            }
        }
        namespace System.Threading.Tasks {
            class Task$1<TResult> extends System.Threading.Tasks.Task implements System.IAsyncResult, System.Threading.IThreadPoolWorkItem, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
            class Task extends System.Object implements System.IAsyncResult, System.Threading.IThreadPoolWorkItem, System.IDisposable
            {
                protected [__keep_incompatibility]: never;
            }
        }
        namespace System.Threading {
            interface IThreadPoolWorkItem
            {
            }
        }
    }
    export = CSharp;
}
