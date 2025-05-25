
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model TurnoFijo
 * 
 */
export type TurnoFijo = $Result.DefaultSelection<Prisma.$TurnoFijoPayload>
/**
 * Model TurnoPuntual
 * 
 */
export type TurnoPuntual = $Result.DefaultSelection<Prisma.$TurnoPuntualPayload>
/**
 * Model HorarioPosible
 * 
 */
export type HorarioPosible = $Result.DefaultSelection<Prisma.$HorarioPosiblePayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model TurnoRegistradoPorCliente
 * 
 */
export type TurnoRegistradoPorCliente = $Result.DefaultSelection<Prisma.$TurnoRegistradoPorClientePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Dia: {
  aLunes: 'aLunes',
  bMartes: 'bMartes',
  cMiércoles: 'cMiércoles',
  dJueves: 'dJueves',
  eViernes: 'eViernes',
  fSábado: 'fSábado',
  gDomingo: 'gDomingo'
};

export type Dia = (typeof Dia)[keyof typeof Dia]


export const Cancha: {
  Squash1: 'Squash1',
  Squash2: 'Squash2',
  Squash3: 'Squash3',
  Padel1: 'Padel1',
  Padel2: 'Padel2',
  Asador1: 'Asador1',
  Asador2: 'Asador2'
};

export type Cancha = (typeof Cancha)[keyof typeof Cancha]


export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Dia = $Enums.Dia

export const Dia: typeof $Enums.Dia

export type Cancha = $Enums.Cancha

export const Cancha: typeof $Enums.Cancha

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turnoFijo`: Exposes CRUD operations for the **TurnoFijo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TurnoFijos
    * const turnoFijos = await prisma.turnoFijo.findMany()
    * ```
    */
  get turnoFijo(): Prisma.TurnoFijoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turnoPuntual`: Exposes CRUD operations for the **TurnoPuntual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TurnoPuntuals
    * const turnoPuntuals = await prisma.turnoPuntual.findMany()
    * ```
    */
  get turnoPuntual(): Prisma.TurnoPuntualDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarioPosible`: Exposes CRUD operations for the **HorarioPosible** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorarioPosibles
    * const horarioPosibles = await prisma.horarioPosible.findMany()
    * ```
    */
  get horarioPosible(): Prisma.HorarioPosibleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.turnoRegistradoPorCliente`: Exposes CRUD operations for the **TurnoRegistradoPorCliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TurnoRegistradoPorClientes
    * const turnoRegistradoPorClientes = await prisma.turnoRegistradoPorCliente.findMany()
    * ```
    */
  get turnoRegistradoPorCliente(): Prisma.TurnoRegistradoPorClienteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    TurnoFijo: 'TurnoFijo',
    TurnoPuntual: 'TurnoPuntual',
    HorarioPosible: 'HorarioPosible',
    Usuario: 'Usuario',
    TurnoRegistradoPorCliente: 'TurnoRegistradoPorCliente'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "turnoFijo" | "turnoPuntual" | "horarioPosible" | "usuario" | "turnoRegistradoPorCliente"
      txIsolationLevel: never
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ClienteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ClienteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      TurnoFijo: {
        payload: Prisma.$TurnoFijoPayload<ExtArgs>
        fields: Prisma.TurnoFijoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnoFijoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoFijoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnoFijoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoFijoPayload>
          }
          findFirst: {
            args: Prisma.TurnoFijoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoFijoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnoFijoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoFijoPayload>
          }
          findMany: {
            args: Prisma.TurnoFijoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoFijoPayload>[]
          }
          create: {
            args: Prisma.TurnoFijoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoFijoPayload>
          }
          createMany: {
            args: Prisma.TurnoFijoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TurnoFijoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoFijoPayload>
          }
          update: {
            args: Prisma.TurnoFijoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoFijoPayload>
          }
          deleteMany: {
            args: Prisma.TurnoFijoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurnoFijoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurnoFijoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoFijoPayload>
          }
          aggregate: {
            args: Prisma.TurnoFijoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurnoFijo>
          }
          groupBy: {
            args: Prisma.TurnoFijoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnoFijoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TurnoFijoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TurnoFijoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TurnoFijoCountArgs<ExtArgs>
            result: $Utils.Optional<TurnoFijoCountAggregateOutputType> | number
          }
        }
      }
      TurnoPuntual: {
        payload: Prisma.$TurnoPuntualPayload<ExtArgs>
        fields: Prisma.TurnoPuntualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnoPuntualFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPuntualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnoPuntualFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPuntualPayload>
          }
          findFirst: {
            args: Prisma.TurnoPuntualFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPuntualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnoPuntualFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPuntualPayload>
          }
          findMany: {
            args: Prisma.TurnoPuntualFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPuntualPayload>[]
          }
          create: {
            args: Prisma.TurnoPuntualCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPuntualPayload>
          }
          createMany: {
            args: Prisma.TurnoPuntualCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TurnoPuntualDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPuntualPayload>
          }
          update: {
            args: Prisma.TurnoPuntualUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPuntualPayload>
          }
          deleteMany: {
            args: Prisma.TurnoPuntualDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurnoPuntualUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurnoPuntualUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoPuntualPayload>
          }
          aggregate: {
            args: Prisma.TurnoPuntualAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurnoPuntual>
          }
          groupBy: {
            args: Prisma.TurnoPuntualGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnoPuntualGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TurnoPuntualFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TurnoPuntualAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TurnoPuntualCountArgs<ExtArgs>
            result: $Utils.Optional<TurnoPuntualCountAggregateOutputType> | number
          }
        }
      }
      HorarioPosible: {
        payload: Prisma.$HorarioPosiblePayload<ExtArgs>
        fields: Prisma.HorarioPosibleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorarioPosibleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPosiblePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorarioPosibleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPosiblePayload>
          }
          findFirst: {
            args: Prisma.HorarioPosibleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPosiblePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorarioPosibleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPosiblePayload>
          }
          findMany: {
            args: Prisma.HorarioPosibleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPosiblePayload>[]
          }
          create: {
            args: Prisma.HorarioPosibleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPosiblePayload>
          }
          createMany: {
            args: Prisma.HorarioPosibleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HorarioPosibleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPosiblePayload>
          }
          update: {
            args: Prisma.HorarioPosibleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPosiblePayload>
          }
          deleteMany: {
            args: Prisma.HorarioPosibleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorarioPosibleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HorarioPosibleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioPosiblePayload>
          }
          aggregate: {
            args: Prisma.HorarioPosibleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarioPosible>
          }
          groupBy: {
            args: Prisma.HorarioPosibleGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorarioPosibleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HorarioPosibleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HorarioPosibleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HorarioPosibleCountArgs<ExtArgs>
            result: $Utils.Optional<HorarioPosibleCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UsuarioFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UsuarioAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      TurnoRegistradoPorCliente: {
        payload: Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>
        fields: Prisma.TurnoRegistradoPorClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnoRegistradoPorClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoRegistradoPorClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnoRegistradoPorClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoRegistradoPorClientePayload>
          }
          findFirst: {
            args: Prisma.TurnoRegistradoPorClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoRegistradoPorClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnoRegistradoPorClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoRegistradoPorClientePayload>
          }
          findMany: {
            args: Prisma.TurnoRegistradoPorClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoRegistradoPorClientePayload>[]
          }
          create: {
            args: Prisma.TurnoRegistradoPorClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoRegistradoPorClientePayload>
          }
          createMany: {
            args: Prisma.TurnoRegistradoPorClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TurnoRegistradoPorClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoRegistradoPorClientePayload>
          }
          update: {
            args: Prisma.TurnoRegistradoPorClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoRegistradoPorClientePayload>
          }
          deleteMany: {
            args: Prisma.TurnoRegistradoPorClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TurnoRegistradoPorClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TurnoRegistradoPorClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TurnoRegistradoPorClientePayload>
          }
          aggregate: {
            args: Prisma.TurnoRegistradoPorClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTurnoRegistradoPorCliente>
          }
          groupBy: {
            args: Prisma.TurnoRegistradoPorClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TurnoRegistradoPorClienteGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TurnoRegistradoPorClienteFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TurnoRegistradoPorClienteAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TurnoRegistradoPorClienteCountArgs<ExtArgs>
            result: $Utils.Optional<TurnoRegistradoPorClienteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    turnoFijo?: TurnoFijoOmit
    turnoPuntual?: TurnoPuntualOmit
    horarioPosible?: HorarioPosibleOmit
    usuario?: UsuarioOmit
    turnoRegistradoPorCliente?: TurnoRegistradoPorClienteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    fijos: number
    puntual: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fijos?: boolean | ClienteCountOutputTypeCountFijosArgs
    puntual?: boolean | ClienteCountOutputTypeCountPuntualArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountFijosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoFijoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPuntualArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoPuntualWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    turnos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | UsuarioCountOutputTypeCountTurnosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTurnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoRegistradoPorClienteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    email: string | null
    telefono: string | null
    nombre: string | null
    dni: string | null
    informacion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    email: string | null
    telefono: string | null
    nombre: string | null
    dni: string | null
    informacion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    email: number
    telefono: number
    nombre: number
    dni: number
    informacion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    email?: true
    telefono?: true
    nombre?: true
    dni?: true
    informacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    email?: true
    telefono?: true
    nombre?: true
    dni?: true
    informacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    email?: true
    telefono?: true
    nombre?: true
    dni?: true
    informacion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    email: string
    telefono: string
    nombre: string
    dni: string
    informacion: string
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    telefono?: boolean
    nombre?: boolean
    dni?: boolean
    informacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fijos?: boolean | Cliente$fijosArgs<ExtArgs>
    puntual?: boolean | Cliente$puntualArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    email?: boolean
    telefono?: boolean
    nombre?: boolean
    dni?: boolean
    informacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "telefono" | "nombre" | "dni" | "informacion" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fijos?: boolean | Cliente$fijosArgs<ExtArgs>
    puntual?: boolean | Cliente$puntualArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      fijos: Prisma.$TurnoFijoPayload<ExtArgs>[]
      puntual: Prisma.$TurnoPuntualPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      telefono: string
      nombre: string
      dni: string
      informacion: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * @param {ClienteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const cliente = await prisma.cliente.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ClienteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Cliente.
     * @param {ClienteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const cliente = await prisma.cliente.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ClienteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fijos<T extends Cliente$fijosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$fijosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoFijoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    puntual<T extends Cliente$puntualArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$puntualArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPuntualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly dni: FieldRef<"Cliente", 'String'>
    readonly informacion: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente findRaw
   */
  export type ClienteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cliente aggregateRaw
   */
  export type ClienteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Cliente.fijos
   */
  export type Cliente$fijosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
    where?: TurnoFijoWhereInput
    orderBy?: TurnoFijoOrderByWithRelationInput | TurnoFijoOrderByWithRelationInput[]
    cursor?: TurnoFijoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoFijoScalarFieldEnum | TurnoFijoScalarFieldEnum[]
  }

  /**
   * Cliente.puntual
   */
  export type Cliente$puntualArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
    where?: TurnoPuntualWhereInput
    orderBy?: TurnoPuntualOrderByWithRelationInput | TurnoPuntualOrderByWithRelationInput[]
    cursor?: TurnoPuntualWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoPuntualScalarFieldEnum | TurnoPuntualScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model TurnoFijo
   */

  export type AggregateTurnoFijo = {
    _count: TurnoFijoCountAggregateOutputType | null
    _avg: TurnoFijoAvgAggregateOutputType | null
    _sum: TurnoFijoSumAggregateOutputType | null
    _min: TurnoFijoMinAggregateOutputType | null
    _max: TurnoFijoMaxAggregateOutputType | null
  }

  export type TurnoFijoAvgAggregateOutputType = {
    cantidadModulos: number | null
  }

  export type TurnoFijoSumAggregateOutputType = {
    cantidadModulos: number | null
  }

  export type TurnoFijoMinAggregateOutputType = {
    id: string | null
    clienteId: string | null
    cancha: $Enums.Cancha | null
    dia: $Enums.Dia | null
    horaComienzo: string | null
    cantidadModulos: number | null
    horaFinaliza: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurnoFijoMaxAggregateOutputType = {
    id: string | null
    clienteId: string | null
    cancha: $Enums.Cancha | null
    dia: $Enums.Dia | null
    horaComienzo: string | null
    cantidadModulos: number | null
    horaFinaliza: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurnoFijoCountAggregateOutputType = {
    id: number
    clienteId: number
    cancha: number
    dia: number
    horaComienzo: number
    cantidadModulos: number
    horaFinaliza: number
    modulosOcupados: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TurnoFijoAvgAggregateInputType = {
    cantidadModulos?: true
  }

  export type TurnoFijoSumAggregateInputType = {
    cantidadModulos?: true
  }

  export type TurnoFijoMinAggregateInputType = {
    id?: true
    clienteId?: true
    cancha?: true
    dia?: true
    horaComienzo?: true
    cantidadModulos?: true
    horaFinaliza?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurnoFijoMaxAggregateInputType = {
    id?: true
    clienteId?: true
    cancha?: true
    dia?: true
    horaComienzo?: true
    cantidadModulos?: true
    horaFinaliza?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurnoFijoCountAggregateInputType = {
    id?: true
    clienteId?: true
    cancha?: true
    dia?: true
    horaComienzo?: true
    cantidadModulos?: true
    horaFinaliza?: true
    modulosOcupados?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TurnoFijoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TurnoFijo to aggregate.
     */
    where?: TurnoFijoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoFijos to fetch.
     */
    orderBy?: TurnoFijoOrderByWithRelationInput | TurnoFijoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnoFijoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoFijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoFijos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TurnoFijos
    **/
    _count?: true | TurnoFijoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnoFijoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnoFijoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnoFijoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnoFijoMaxAggregateInputType
  }

  export type GetTurnoFijoAggregateType<T extends TurnoFijoAggregateArgs> = {
        [P in keyof T & keyof AggregateTurnoFijo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurnoFijo[P]>
      : GetScalarType<T[P], AggregateTurnoFijo[P]>
  }




  export type TurnoFijoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoFijoWhereInput
    orderBy?: TurnoFijoOrderByWithAggregationInput | TurnoFijoOrderByWithAggregationInput[]
    by: TurnoFijoScalarFieldEnum[] | TurnoFijoScalarFieldEnum
    having?: TurnoFijoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnoFijoCountAggregateInputType | true
    _avg?: TurnoFijoAvgAggregateInputType
    _sum?: TurnoFijoSumAggregateInputType
    _min?: TurnoFijoMinAggregateInputType
    _max?: TurnoFijoMaxAggregateInputType
  }

  export type TurnoFijoGroupByOutputType = {
    id: string
    clienteId: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    cantidadModulos: number
    horaFinaliza: string
    modulosOcupados: string[]
    createdAt: Date
    updatedAt: Date
    _count: TurnoFijoCountAggregateOutputType | null
    _avg: TurnoFijoAvgAggregateOutputType | null
    _sum: TurnoFijoSumAggregateOutputType | null
    _min: TurnoFijoMinAggregateOutputType | null
    _max: TurnoFijoMaxAggregateOutputType | null
  }

  type GetTurnoFijoGroupByPayload<T extends TurnoFijoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnoFijoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnoFijoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnoFijoGroupByOutputType[P]>
            : GetScalarType<T[P], TurnoFijoGroupByOutputType[P]>
        }
      >
    >


  export type TurnoFijoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    cancha?: boolean
    dia?: boolean
    horaComienzo?: boolean
    cantidadModulos?: boolean
    horaFinaliza?: boolean
    modulosOcupados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnoFijo"]>



  export type TurnoFijoSelectScalar = {
    id?: boolean
    clienteId?: boolean
    cancha?: boolean
    dia?: boolean
    horaComienzo?: boolean
    cantidadModulos?: boolean
    horaFinaliza?: boolean
    modulosOcupados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TurnoFijoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "cancha" | "dia" | "horaComienzo" | "cantidadModulos" | "horaFinaliza" | "modulosOcupados" | "createdAt" | "updatedAt", ExtArgs["result"]["turnoFijo"]>
  export type TurnoFijoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $TurnoFijoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TurnoFijo"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: string
      cancha: $Enums.Cancha
      dia: $Enums.Dia
      horaComienzo: string
      cantidadModulos: number
      horaFinaliza: string
      modulosOcupados: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["turnoFijo"]>
    composites: {}
  }

  type TurnoFijoGetPayload<S extends boolean | null | undefined | TurnoFijoDefaultArgs> = $Result.GetResult<Prisma.$TurnoFijoPayload, S>

  type TurnoFijoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurnoFijoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurnoFijoCountAggregateInputType | true
    }

  export interface TurnoFijoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TurnoFijo'], meta: { name: 'TurnoFijo' } }
    /**
     * Find zero or one TurnoFijo that matches the filter.
     * @param {TurnoFijoFindUniqueArgs} args - Arguments to find a TurnoFijo
     * @example
     * // Get one TurnoFijo
     * const turnoFijo = await prisma.turnoFijo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurnoFijoFindUniqueArgs>(args: SelectSubset<T, TurnoFijoFindUniqueArgs<ExtArgs>>): Prisma__TurnoFijoClient<$Result.GetResult<Prisma.$TurnoFijoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TurnoFijo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurnoFijoFindUniqueOrThrowArgs} args - Arguments to find a TurnoFijo
     * @example
     * // Get one TurnoFijo
     * const turnoFijo = await prisma.turnoFijo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurnoFijoFindUniqueOrThrowArgs>(args: SelectSubset<T, TurnoFijoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurnoFijoClient<$Result.GetResult<Prisma.$TurnoFijoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TurnoFijo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFijoFindFirstArgs} args - Arguments to find a TurnoFijo
     * @example
     * // Get one TurnoFijo
     * const turnoFijo = await prisma.turnoFijo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurnoFijoFindFirstArgs>(args?: SelectSubset<T, TurnoFijoFindFirstArgs<ExtArgs>>): Prisma__TurnoFijoClient<$Result.GetResult<Prisma.$TurnoFijoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TurnoFijo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFijoFindFirstOrThrowArgs} args - Arguments to find a TurnoFijo
     * @example
     * // Get one TurnoFijo
     * const turnoFijo = await prisma.turnoFijo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurnoFijoFindFirstOrThrowArgs>(args?: SelectSubset<T, TurnoFijoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurnoFijoClient<$Result.GetResult<Prisma.$TurnoFijoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TurnoFijos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFijoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TurnoFijos
     * const turnoFijos = await prisma.turnoFijo.findMany()
     * 
     * // Get first 10 TurnoFijos
     * const turnoFijos = await prisma.turnoFijo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnoFijoWithIdOnly = await prisma.turnoFijo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurnoFijoFindManyArgs>(args?: SelectSubset<T, TurnoFijoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoFijoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TurnoFijo.
     * @param {TurnoFijoCreateArgs} args - Arguments to create a TurnoFijo.
     * @example
     * // Create one TurnoFijo
     * const TurnoFijo = await prisma.turnoFijo.create({
     *   data: {
     *     // ... data to create a TurnoFijo
     *   }
     * })
     * 
     */
    create<T extends TurnoFijoCreateArgs>(args: SelectSubset<T, TurnoFijoCreateArgs<ExtArgs>>): Prisma__TurnoFijoClient<$Result.GetResult<Prisma.$TurnoFijoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TurnoFijos.
     * @param {TurnoFijoCreateManyArgs} args - Arguments to create many TurnoFijos.
     * @example
     * // Create many TurnoFijos
     * const turnoFijo = await prisma.turnoFijo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurnoFijoCreateManyArgs>(args?: SelectSubset<T, TurnoFijoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TurnoFijo.
     * @param {TurnoFijoDeleteArgs} args - Arguments to delete one TurnoFijo.
     * @example
     * // Delete one TurnoFijo
     * const TurnoFijo = await prisma.turnoFijo.delete({
     *   where: {
     *     // ... filter to delete one TurnoFijo
     *   }
     * })
     * 
     */
    delete<T extends TurnoFijoDeleteArgs>(args: SelectSubset<T, TurnoFijoDeleteArgs<ExtArgs>>): Prisma__TurnoFijoClient<$Result.GetResult<Prisma.$TurnoFijoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TurnoFijo.
     * @param {TurnoFijoUpdateArgs} args - Arguments to update one TurnoFijo.
     * @example
     * // Update one TurnoFijo
     * const turnoFijo = await prisma.turnoFijo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurnoFijoUpdateArgs>(args: SelectSubset<T, TurnoFijoUpdateArgs<ExtArgs>>): Prisma__TurnoFijoClient<$Result.GetResult<Prisma.$TurnoFijoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TurnoFijos.
     * @param {TurnoFijoDeleteManyArgs} args - Arguments to filter TurnoFijos to delete.
     * @example
     * // Delete a few TurnoFijos
     * const { count } = await prisma.turnoFijo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurnoFijoDeleteManyArgs>(args?: SelectSubset<T, TurnoFijoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TurnoFijos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFijoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TurnoFijos
     * const turnoFijo = await prisma.turnoFijo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurnoFijoUpdateManyArgs>(args: SelectSubset<T, TurnoFijoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TurnoFijo.
     * @param {TurnoFijoUpsertArgs} args - Arguments to update or create a TurnoFijo.
     * @example
     * // Update or create a TurnoFijo
     * const turnoFijo = await prisma.turnoFijo.upsert({
     *   create: {
     *     // ... data to create a TurnoFijo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TurnoFijo we want to update
     *   }
     * })
     */
    upsert<T extends TurnoFijoUpsertArgs>(args: SelectSubset<T, TurnoFijoUpsertArgs<ExtArgs>>): Prisma__TurnoFijoClient<$Result.GetResult<Prisma.$TurnoFijoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TurnoFijos that matches the filter.
     * @param {TurnoFijoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const turnoFijo = await prisma.turnoFijo.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TurnoFijoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TurnoFijo.
     * @param {TurnoFijoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const turnoFijo = await prisma.turnoFijo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TurnoFijoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TurnoFijos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFijoCountArgs} args - Arguments to filter TurnoFijos to count.
     * @example
     * // Count the number of TurnoFijos
     * const count = await prisma.turnoFijo.count({
     *   where: {
     *     // ... the filter for the TurnoFijos we want to count
     *   }
     * })
    **/
    count<T extends TurnoFijoCountArgs>(
      args?: Subset<T, TurnoFijoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnoFijoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TurnoFijo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFijoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurnoFijoAggregateArgs>(args: Subset<T, TurnoFijoAggregateArgs>): Prisma.PrismaPromise<GetTurnoFijoAggregateType<T>>

    /**
     * Group by TurnoFijo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoFijoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurnoFijoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnoFijoGroupByArgs['orderBy'] }
        : { orderBy?: TurnoFijoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurnoFijoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoFijoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TurnoFijo model
   */
  readonly fields: TurnoFijoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TurnoFijo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnoFijoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TurnoFijo model
   */
  interface TurnoFijoFieldRefs {
    readonly id: FieldRef<"TurnoFijo", 'String'>
    readonly clienteId: FieldRef<"TurnoFijo", 'String'>
    readonly cancha: FieldRef<"TurnoFijo", 'Cancha'>
    readonly dia: FieldRef<"TurnoFijo", 'Dia'>
    readonly horaComienzo: FieldRef<"TurnoFijo", 'String'>
    readonly cantidadModulos: FieldRef<"TurnoFijo", 'Int'>
    readonly horaFinaliza: FieldRef<"TurnoFijo", 'String'>
    readonly modulosOcupados: FieldRef<"TurnoFijo", 'String[]'>
    readonly createdAt: FieldRef<"TurnoFijo", 'DateTime'>
    readonly updatedAt: FieldRef<"TurnoFijo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TurnoFijo findUnique
   */
  export type TurnoFijoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
    /**
     * Filter, which TurnoFijo to fetch.
     */
    where: TurnoFijoWhereUniqueInput
  }

  /**
   * TurnoFijo findUniqueOrThrow
   */
  export type TurnoFijoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
    /**
     * Filter, which TurnoFijo to fetch.
     */
    where: TurnoFijoWhereUniqueInput
  }

  /**
   * TurnoFijo findFirst
   */
  export type TurnoFijoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
    /**
     * Filter, which TurnoFijo to fetch.
     */
    where?: TurnoFijoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoFijos to fetch.
     */
    orderBy?: TurnoFijoOrderByWithRelationInput | TurnoFijoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TurnoFijos.
     */
    cursor?: TurnoFijoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoFijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoFijos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TurnoFijos.
     */
    distinct?: TurnoFijoScalarFieldEnum | TurnoFijoScalarFieldEnum[]
  }

  /**
   * TurnoFijo findFirstOrThrow
   */
  export type TurnoFijoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
    /**
     * Filter, which TurnoFijo to fetch.
     */
    where?: TurnoFijoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoFijos to fetch.
     */
    orderBy?: TurnoFijoOrderByWithRelationInput | TurnoFijoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TurnoFijos.
     */
    cursor?: TurnoFijoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoFijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoFijos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TurnoFijos.
     */
    distinct?: TurnoFijoScalarFieldEnum | TurnoFijoScalarFieldEnum[]
  }

  /**
   * TurnoFijo findMany
   */
  export type TurnoFijoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
    /**
     * Filter, which TurnoFijos to fetch.
     */
    where?: TurnoFijoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoFijos to fetch.
     */
    orderBy?: TurnoFijoOrderByWithRelationInput | TurnoFijoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TurnoFijos.
     */
    cursor?: TurnoFijoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoFijos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoFijos.
     */
    skip?: number
    distinct?: TurnoFijoScalarFieldEnum | TurnoFijoScalarFieldEnum[]
  }

  /**
   * TurnoFijo create
   */
  export type TurnoFijoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
    /**
     * The data needed to create a TurnoFijo.
     */
    data: XOR<TurnoFijoCreateInput, TurnoFijoUncheckedCreateInput>
  }

  /**
   * TurnoFijo createMany
   */
  export type TurnoFijoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TurnoFijos.
     */
    data: TurnoFijoCreateManyInput | TurnoFijoCreateManyInput[]
  }

  /**
   * TurnoFijo update
   */
  export type TurnoFijoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
    /**
     * The data needed to update a TurnoFijo.
     */
    data: XOR<TurnoFijoUpdateInput, TurnoFijoUncheckedUpdateInput>
    /**
     * Choose, which TurnoFijo to update.
     */
    where: TurnoFijoWhereUniqueInput
  }

  /**
   * TurnoFijo updateMany
   */
  export type TurnoFijoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TurnoFijos.
     */
    data: XOR<TurnoFijoUpdateManyMutationInput, TurnoFijoUncheckedUpdateManyInput>
    /**
     * Filter which TurnoFijos to update
     */
    where?: TurnoFijoWhereInput
    /**
     * Limit how many TurnoFijos to update.
     */
    limit?: number
  }

  /**
   * TurnoFijo upsert
   */
  export type TurnoFijoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
    /**
     * The filter to search for the TurnoFijo to update in case it exists.
     */
    where: TurnoFijoWhereUniqueInput
    /**
     * In case the TurnoFijo found by the `where` argument doesn't exist, create a new TurnoFijo with this data.
     */
    create: XOR<TurnoFijoCreateInput, TurnoFijoUncheckedCreateInput>
    /**
     * In case the TurnoFijo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnoFijoUpdateInput, TurnoFijoUncheckedUpdateInput>
  }

  /**
   * TurnoFijo delete
   */
  export type TurnoFijoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
    /**
     * Filter which TurnoFijo to delete.
     */
    where: TurnoFijoWhereUniqueInput
  }

  /**
   * TurnoFijo deleteMany
   */
  export type TurnoFijoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TurnoFijos to delete
     */
    where?: TurnoFijoWhereInput
    /**
     * Limit how many TurnoFijos to delete.
     */
    limit?: number
  }

  /**
   * TurnoFijo findRaw
   */
  export type TurnoFijoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TurnoFijo aggregateRaw
   */
  export type TurnoFijoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TurnoFijo without action
   */
  export type TurnoFijoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoFijo
     */
    select?: TurnoFijoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoFijo
     */
    omit?: TurnoFijoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoFijoInclude<ExtArgs> | null
  }


  /**
   * Model TurnoPuntual
   */

  export type AggregateTurnoPuntual = {
    _count: TurnoPuntualCountAggregateOutputType | null
    _avg: TurnoPuntualAvgAggregateOutputType | null
    _sum: TurnoPuntualSumAggregateOutputType | null
    _min: TurnoPuntualMinAggregateOutputType | null
    _max: TurnoPuntualMaxAggregateOutputType | null
  }

  export type TurnoPuntualAvgAggregateOutputType = {
    cantidadModulos: number | null
  }

  export type TurnoPuntualSumAggregateOutputType = {
    cantidadModulos: number | null
  }

  export type TurnoPuntualMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    clienteId: string | null
    cancha: $Enums.Cancha | null
    dia: $Enums.Dia | null
    horaComienzo: string | null
    horaFinaliza: string | null
    cantidadModulos: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurnoPuntualMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    clienteId: string | null
    cancha: $Enums.Cancha | null
    dia: $Enums.Dia | null
    horaComienzo: string | null
    horaFinaliza: string | null
    cantidadModulos: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurnoPuntualCountAggregateOutputType = {
    id: number
    fecha: number
    clienteId: number
    cancha: number
    dia: number
    horaComienzo: number
    horaFinaliza: number
    cantidadModulos: number
    modulosOcupados: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TurnoPuntualAvgAggregateInputType = {
    cantidadModulos?: true
  }

  export type TurnoPuntualSumAggregateInputType = {
    cantidadModulos?: true
  }

  export type TurnoPuntualMinAggregateInputType = {
    id?: true
    fecha?: true
    clienteId?: true
    cancha?: true
    dia?: true
    horaComienzo?: true
    horaFinaliza?: true
    cantidadModulos?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurnoPuntualMaxAggregateInputType = {
    id?: true
    fecha?: true
    clienteId?: true
    cancha?: true
    dia?: true
    horaComienzo?: true
    horaFinaliza?: true
    cantidadModulos?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurnoPuntualCountAggregateInputType = {
    id?: true
    fecha?: true
    clienteId?: true
    cancha?: true
    dia?: true
    horaComienzo?: true
    horaFinaliza?: true
    cantidadModulos?: true
    modulosOcupados?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TurnoPuntualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TurnoPuntual to aggregate.
     */
    where?: TurnoPuntualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoPuntuals to fetch.
     */
    orderBy?: TurnoPuntualOrderByWithRelationInput | TurnoPuntualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnoPuntualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoPuntuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoPuntuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TurnoPuntuals
    **/
    _count?: true | TurnoPuntualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnoPuntualAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnoPuntualSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnoPuntualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnoPuntualMaxAggregateInputType
  }

  export type GetTurnoPuntualAggregateType<T extends TurnoPuntualAggregateArgs> = {
        [P in keyof T & keyof AggregateTurnoPuntual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurnoPuntual[P]>
      : GetScalarType<T[P], AggregateTurnoPuntual[P]>
  }




  export type TurnoPuntualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoPuntualWhereInput
    orderBy?: TurnoPuntualOrderByWithAggregationInput | TurnoPuntualOrderByWithAggregationInput[]
    by: TurnoPuntualScalarFieldEnum[] | TurnoPuntualScalarFieldEnum
    having?: TurnoPuntualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnoPuntualCountAggregateInputType | true
    _avg?: TurnoPuntualAvgAggregateInputType
    _sum?: TurnoPuntualSumAggregateInputType
    _min?: TurnoPuntualMinAggregateInputType
    _max?: TurnoPuntualMaxAggregateInputType
  }

  export type TurnoPuntualGroupByOutputType = {
    id: string
    fecha: Date
    clienteId: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados: string[]
    createdAt: Date
    updatedAt: Date
    _count: TurnoPuntualCountAggregateOutputType | null
    _avg: TurnoPuntualAvgAggregateOutputType | null
    _sum: TurnoPuntualSumAggregateOutputType | null
    _min: TurnoPuntualMinAggregateOutputType | null
    _max: TurnoPuntualMaxAggregateOutputType | null
  }

  type GetTurnoPuntualGroupByPayload<T extends TurnoPuntualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnoPuntualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnoPuntualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnoPuntualGroupByOutputType[P]>
            : GetScalarType<T[P], TurnoPuntualGroupByOutputType[P]>
        }
      >
    >


  export type TurnoPuntualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    clienteId?: boolean
    cancha?: boolean
    dia?: boolean
    horaComienzo?: boolean
    horaFinaliza?: boolean
    cantidadModulos?: boolean
    modulosOcupados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnoPuntual"]>



  export type TurnoPuntualSelectScalar = {
    id?: boolean
    fecha?: boolean
    clienteId?: boolean
    cancha?: boolean
    dia?: boolean
    horaComienzo?: boolean
    horaFinaliza?: boolean
    cantidadModulos?: boolean
    modulosOcupados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TurnoPuntualOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "clienteId" | "cancha" | "dia" | "horaComienzo" | "horaFinaliza" | "cantidadModulos" | "modulosOcupados" | "createdAt" | "updatedAt", ExtArgs["result"]["turnoPuntual"]>
  export type TurnoPuntualInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $TurnoPuntualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TurnoPuntual"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      clienteId: string
      cancha: $Enums.Cancha
      dia: $Enums.Dia
      horaComienzo: string
      horaFinaliza: string
      cantidadModulos: number
      modulosOcupados: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["turnoPuntual"]>
    composites: {}
  }

  type TurnoPuntualGetPayload<S extends boolean | null | undefined | TurnoPuntualDefaultArgs> = $Result.GetResult<Prisma.$TurnoPuntualPayload, S>

  type TurnoPuntualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurnoPuntualFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurnoPuntualCountAggregateInputType | true
    }

  export interface TurnoPuntualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TurnoPuntual'], meta: { name: 'TurnoPuntual' } }
    /**
     * Find zero or one TurnoPuntual that matches the filter.
     * @param {TurnoPuntualFindUniqueArgs} args - Arguments to find a TurnoPuntual
     * @example
     * // Get one TurnoPuntual
     * const turnoPuntual = await prisma.turnoPuntual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurnoPuntualFindUniqueArgs>(args: SelectSubset<T, TurnoPuntualFindUniqueArgs<ExtArgs>>): Prisma__TurnoPuntualClient<$Result.GetResult<Prisma.$TurnoPuntualPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TurnoPuntual that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurnoPuntualFindUniqueOrThrowArgs} args - Arguments to find a TurnoPuntual
     * @example
     * // Get one TurnoPuntual
     * const turnoPuntual = await prisma.turnoPuntual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurnoPuntualFindUniqueOrThrowArgs>(args: SelectSubset<T, TurnoPuntualFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurnoPuntualClient<$Result.GetResult<Prisma.$TurnoPuntualPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TurnoPuntual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoPuntualFindFirstArgs} args - Arguments to find a TurnoPuntual
     * @example
     * // Get one TurnoPuntual
     * const turnoPuntual = await prisma.turnoPuntual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurnoPuntualFindFirstArgs>(args?: SelectSubset<T, TurnoPuntualFindFirstArgs<ExtArgs>>): Prisma__TurnoPuntualClient<$Result.GetResult<Prisma.$TurnoPuntualPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TurnoPuntual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoPuntualFindFirstOrThrowArgs} args - Arguments to find a TurnoPuntual
     * @example
     * // Get one TurnoPuntual
     * const turnoPuntual = await prisma.turnoPuntual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurnoPuntualFindFirstOrThrowArgs>(args?: SelectSubset<T, TurnoPuntualFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurnoPuntualClient<$Result.GetResult<Prisma.$TurnoPuntualPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TurnoPuntuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoPuntualFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TurnoPuntuals
     * const turnoPuntuals = await prisma.turnoPuntual.findMany()
     * 
     * // Get first 10 TurnoPuntuals
     * const turnoPuntuals = await prisma.turnoPuntual.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnoPuntualWithIdOnly = await prisma.turnoPuntual.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurnoPuntualFindManyArgs>(args?: SelectSubset<T, TurnoPuntualFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoPuntualPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TurnoPuntual.
     * @param {TurnoPuntualCreateArgs} args - Arguments to create a TurnoPuntual.
     * @example
     * // Create one TurnoPuntual
     * const TurnoPuntual = await prisma.turnoPuntual.create({
     *   data: {
     *     // ... data to create a TurnoPuntual
     *   }
     * })
     * 
     */
    create<T extends TurnoPuntualCreateArgs>(args: SelectSubset<T, TurnoPuntualCreateArgs<ExtArgs>>): Prisma__TurnoPuntualClient<$Result.GetResult<Prisma.$TurnoPuntualPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TurnoPuntuals.
     * @param {TurnoPuntualCreateManyArgs} args - Arguments to create many TurnoPuntuals.
     * @example
     * // Create many TurnoPuntuals
     * const turnoPuntual = await prisma.turnoPuntual.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurnoPuntualCreateManyArgs>(args?: SelectSubset<T, TurnoPuntualCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TurnoPuntual.
     * @param {TurnoPuntualDeleteArgs} args - Arguments to delete one TurnoPuntual.
     * @example
     * // Delete one TurnoPuntual
     * const TurnoPuntual = await prisma.turnoPuntual.delete({
     *   where: {
     *     // ... filter to delete one TurnoPuntual
     *   }
     * })
     * 
     */
    delete<T extends TurnoPuntualDeleteArgs>(args: SelectSubset<T, TurnoPuntualDeleteArgs<ExtArgs>>): Prisma__TurnoPuntualClient<$Result.GetResult<Prisma.$TurnoPuntualPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TurnoPuntual.
     * @param {TurnoPuntualUpdateArgs} args - Arguments to update one TurnoPuntual.
     * @example
     * // Update one TurnoPuntual
     * const turnoPuntual = await prisma.turnoPuntual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurnoPuntualUpdateArgs>(args: SelectSubset<T, TurnoPuntualUpdateArgs<ExtArgs>>): Prisma__TurnoPuntualClient<$Result.GetResult<Prisma.$TurnoPuntualPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TurnoPuntuals.
     * @param {TurnoPuntualDeleteManyArgs} args - Arguments to filter TurnoPuntuals to delete.
     * @example
     * // Delete a few TurnoPuntuals
     * const { count } = await prisma.turnoPuntual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurnoPuntualDeleteManyArgs>(args?: SelectSubset<T, TurnoPuntualDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TurnoPuntuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoPuntualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TurnoPuntuals
     * const turnoPuntual = await prisma.turnoPuntual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurnoPuntualUpdateManyArgs>(args: SelectSubset<T, TurnoPuntualUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TurnoPuntual.
     * @param {TurnoPuntualUpsertArgs} args - Arguments to update or create a TurnoPuntual.
     * @example
     * // Update or create a TurnoPuntual
     * const turnoPuntual = await prisma.turnoPuntual.upsert({
     *   create: {
     *     // ... data to create a TurnoPuntual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TurnoPuntual we want to update
     *   }
     * })
     */
    upsert<T extends TurnoPuntualUpsertArgs>(args: SelectSubset<T, TurnoPuntualUpsertArgs<ExtArgs>>): Prisma__TurnoPuntualClient<$Result.GetResult<Prisma.$TurnoPuntualPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TurnoPuntuals that matches the filter.
     * @param {TurnoPuntualFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const turnoPuntual = await prisma.turnoPuntual.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TurnoPuntualFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TurnoPuntual.
     * @param {TurnoPuntualAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const turnoPuntual = await prisma.turnoPuntual.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TurnoPuntualAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TurnoPuntuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoPuntualCountArgs} args - Arguments to filter TurnoPuntuals to count.
     * @example
     * // Count the number of TurnoPuntuals
     * const count = await prisma.turnoPuntual.count({
     *   where: {
     *     // ... the filter for the TurnoPuntuals we want to count
     *   }
     * })
    **/
    count<T extends TurnoPuntualCountArgs>(
      args?: Subset<T, TurnoPuntualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnoPuntualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TurnoPuntual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoPuntualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurnoPuntualAggregateArgs>(args: Subset<T, TurnoPuntualAggregateArgs>): Prisma.PrismaPromise<GetTurnoPuntualAggregateType<T>>

    /**
     * Group by TurnoPuntual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoPuntualGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurnoPuntualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnoPuntualGroupByArgs['orderBy'] }
        : { orderBy?: TurnoPuntualGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurnoPuntualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoPuntualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TurnoPuntual model
   */
  readonly fields: TurnoPuntualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TurnoPuntual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnoPuntualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TurnoPuntual model
   */
  interface TurnoPuntualFieldRefs {
    readonly id: FieldRef<"TurnoPuntual", 'String'>
    readonly fecha: FieldRef<"TurnoPuntual", 'DateTime'>
    readonly clienteId: FieldRef<"TurnoPuntual", 'String'>
    readonly cancha: FieldRef<"TurnoPuntual", 'Cancha'>
    readonly dia: FieldRef<"TurnoPuntual", 'Dia'>
    readonly horaComienzo: FieldRef<"TurnoPuntual", 'String'>
    readonly horaFinaliza: FieldRef<"TurnoPuntual", 'String'>
    readonly cantidadModulos: FieldRef<"TurnoPuntual", 'Int'>
    readonly modulosOcupados: FieldRef<"TurnoPuntual", 'String[]'>
    readonly createdAt: FieldRef<"TurnoPuntual", 'DateTime'>
    readonly updatedAt: FieldRef<"TurnoPuntual", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TurnoPuntual findUnique
   */
  export type TurnoPuntualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
    /**
     * Filter, which TurnoPuntual to fetch.
     */
    where: TurnoPuntualWhereUniqueInput
  }

  /**
   * TurnoPuntual findUniqueOrThrow
   */
  export type TurnoPuntualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
    /**
     * Filter, which TurnoPuntual to fetch.
     */
    where: TurnoPuntualWhereUniqueInput
  }

  /**
   * TurnoPuntual findFirst
   */
  export type TurnoPuntualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
    /**
     * Filter, which TurnoPuntual to fetch.
     */
    where?: TurnoPuntualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoPuntuals to fetch.
     */
    orderBy?: TurnoPuntualOrderByWithRelationInput | TurnoPuntualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TurnoPuntuals.
     */
    cursor?: TurnoPuntualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoPuntuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoPuntuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TurnoPuntuals.
     */
    distinct?: TurnoPuntualScalarFieldEnum | TurnoPuntualScalarFieldEnum[]
  }

  /**
   * TurnoPuntual findFirstOrThrow
   */
  export type TurnoPuntualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
    /**
     * Filter, which TurnoPuntual to fetch.
     */
    where?: TurnoPuntualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoPuntuals to fetch.
     */
    orderBy?: TurnoPuntualOrderByWithRelationInput | TurnoPuntualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TurnoPuntuals.
     */
    cursor?: TurnoPuntualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoPuntuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoPuntuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TurnoPuntuals.
     */
    distinct?: TurnoPuntualScalarFieldEnum | TurnoPuntualScalarFieldEnum[]
  }

  /**
   * TurnoPuntual findMany
   */
  export type TurnoPuntualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
    /**
     * Filter, which TurnoPuntuals to fetch.
     */
    where?: TurnoPuntualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoPuntuals to fetch.
     */
    orderBy?: TurnoPuntualOrderByWithRelationInput | TurnoPuntualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TurnoPuntuals.
     */
    cursor?: TurnoPuntualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoPuntuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoPuntuals.
     */
    skip?: number
    distinct?: TurnoPuntualScalarFieldEnum | TurnoPuntualScalarFieldEnum[]
  }

  /**
   * TurnoPuntual create
   */
  export type TurnoPuntualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
    /**
     * The data needed to create a TurnoPuntual.
     */
    data: XOR<TurnoPuntualCreateInput, TurnoPuntualUncheckedCreateInput>
  }

  /**
   * TurnoPuntual createMany
   */
  export type TurnoPuntualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TurnoPuntuals.
     */
    data: TurnoPuntualCreateManyInput | TurnoPuntualCreateManyInput[]
  }

  /**
   * TurnoPuntual update
   */
  export type TurnoPuntualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
    /**
     * The data needed to update a TurnoPuntual.
     */
    data: XOR<TurnoPuntualUpdateInput, TurnoPuntualUncheckedUpdateInput>
    /**
     * Choose, which TurnoPuntual to update.
     */
    where: TurnoPuntualWhereUniqueInput
  }

  /**
   * TurnoPuntual updateMany
   */
  export type TurnoPuntualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TurnoPuntuals.
     */
    data: XOR<TurnoPuntualUpdateManyMutationInput, TurnoPuntualUncheckedUpdateManyInput>
    /**
     * Filter which TurnoPuntuals to update
     */
    where?: TurnoPuntualWhereInput
    /**
     * Limit how many TurnoPuntuals to update.
     */
    limit?: number
  }

  /**
   * TurnoPuntual upsert
   */
  export type TurnoPuntualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
    /**
     * The filter to search for the TurnoPuntual to update in case it exists.
     */
    where: TurnoPuntualWhereUniqueInput
    /**
     * In case the TurnoPuntual found by the `where` argument doesn't exist, create a new TurnoPuntual with this data.
     */
    create: XOR<TurnoPuntualCreateInput, TurnoPuntualUncheckedCreateInput>
    /**
     * In case the TurnoPuntual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnoPuntualUpdateInput, TurnoPuntualUncheckedUpdateInput>
  }

  /**
   * TurnoPuntual delete
   */
  export type TurnoPuntualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
    /**
     * Filter which TurnoPuntual to delete.
     */
    where: TurnoPuntualWhereUniqueInput
  }

  /**
   * TurnoPuntual deleteMany
   */
  export type TurnoPuntualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TurnoPuntuals to delete
     */
    where?: TurnoPuntualWhereInput
    /**
     * Limit how many TurnoPuntuals to delete.
     */
    limit?: number
  }

  /**
   * TurnoPuntual findRaw
   */
  export type TurnoPuntualFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TurnoPuntual aggregateRaw
   */
  export type TurnoPuntualAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TurnoPuntual without action
   */
  export type TurnoPuntualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoPuntual
     */
    select?: TurnoPuntualSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoPuntual
     */
    omit?: TurnoPuntualOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoPuntualInclude<ExtArgs> | null
  }


  /**
   * Model HorarioPosible
   */

  export type AggregateHorarioPosible = {
    _count: HorarioPosibleCountAggregateOutputType | null
    _min: HorarioPosibleMinAggregateOutputType | null
    _max: HorarioPosibleMaxAggregateOutputType | null
  }

  export type HorarioPosibleMinAggregateOutputType = {
    id: string | null
    dia: string | null
    horarioComienzo: string | null
    abierto: boolean | null
    mostrar: boolean | null
  }

  export type HorarioPosibleMaxAggregateOutputType = {
    id: string | null
    dia: string | null
    horarioComienzo: string | null
    abierto: boolean | null
    mostrar: boolean | null
  }

  export type HorarioPosibleCountAggregateOutputType = {
    id: number
    dia: number
    horarioComienzo: number
    abierto: number
    mostrar: number
    _all: number
  }


  export type HorarioPosibleMinAggregateInputType = {
    id?: true
    dia?: true
    horarioComienzo?: true
    abierto?: true
    mostrar?: true
  }

  export type HorarioPosibleMaxAggregateInputType = {
    id?: true
    dia?: true
    horarioComienzo?: true
    abierto?: true
    mostrar?: true
  }

  export type HorarioPosibleCountAggregateInputType = {
    id?: true
    dia?: true
    horarioComienzo?: true
    abierto?: true
    mostrar?: true
    _all?: true
  }

  export type HorarioPosibleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioPosible to aggregate.
     */
    where?: HorarioPosibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioPosibles to fetch.
     */
    orderBy?: HorarioPosibleOrderByWithRelationInput | HorarioPosibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorarioPosibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioPosibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioPosibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorarioPosibles
    **/
    _count?: true | HorarioPosibleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorarioPosibleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorarioPosibleMaxAggregateInputType
  }

  export type GetHorarioPosibleAggregateType<T extends HorarioPosibleAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarioPosible]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarioPosible[P]>
      : GetScalarType<T[P], AggregateHorarioPosible[P]>
  }




  export type HorarioPosibleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioPosibleWhereInput
    orderBy?: HorarioPosibleOrderByWithAggregationInput | HorarioPosibleOrderByWithAggregationInput[]
    by: HorarioPosibleScalarFieldEnum[] | HorarioPosibleScalarFieldEnum
    having?: HorarioPosibleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorarioPosibleCountAggregateInputType | true
    _min?: HorarioPosibleMinAggregateInputType
    _max?: HorarioPosibleMaxAggregateInputType
  }

  export type HorarioPosibleGroupByOutputType = {
    id: string
    dia: string
    horarioComienzo: string
    abierto: boolean
    mostrar: boolean
    _count: HorarioPosibleCountAggregateOutputType | null
    _min: HorarioPosibleMinAggregateOutputType | null
    _max: HorarioPosibleMaxAggregateOutputType | null
  }

  type GetHorarioPosibleGroupByPayload<T extends HorarioPosibleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorarioPosibleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorarioPosibleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorarioPosibleGroupByOutputType[P]>
            : GetScalarType<T[P], HorarioPosibleGroupByOutputType[P]>
        }
      >
    >


  export type HorarioPosibleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dia?: boolean
    horarioComienzo?: boolean
    abierto?: boolean
    mostrar?: boolean
  }, ExtArgs["result"]["horarioPosible"]>



  export type HorarioPosibleSelectScalar = {
    id?: boolean
    dia?: boolean
    horarioComienzo?: boolean
    abierto?: boolean
    mostrar?: boolean
  }

  export type HorarioPosibleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dia" | "horarioComienzo" | "abierto" | "mostrar", ExtArgs["result"]["horarioPosible"]>

  export type $HorarioPosiblePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorarioPosible"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dia: string
      horarioComienzo: string
      abierto: boolean
      mostrar: boolean
    }, ExtArgs["result"]["horarioPosible"]>
    composites: {}
  }

  type HorarioPosibleGetPayload<S extends boolean | null | undefined | HorarioPosibleDefaultArgs> = $Result.GetResult<Prisma.$HorarioPosiblePayload, S>

  type HorarioPosibleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorarioPosibleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorarioPosibleCountAggregateInputType | true
    }

  export interface HorarioPosibleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorarioPosible'], meta: { name: 'HorarioPosible' } }
    /**
     * Find zero or one HorarioPosible that matches the filter.
     * @param {HorarioPosibleFindUniqueArgs} args - Arguments to find a HorarioPosible
     * @example
     * // Get one HorarioPosible
     * const horarioPosible = await prisma.horarioPosible.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorarioPosibleFindUniqueArgs>(args: SelectSubset<T, HorarioPosibleFindUniqueArgs<ExtArgs>>): Prisma__HorarioPosibleClient<$Result.GetResult<Prisma.$HorarioPosiblePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorarioPosible that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorarioPosibleFindUniqueOrThrowArgs} args - Arguments to find a HorarioPosible
     * @example
     * // Get one HorarioPosible
     * const horarioPosible = await prisma.horarioPosible.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorarioPosibleFindUniqueOrThrowArgs>(args: SelectSubset<T, HorarioPosibleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorarioPosibleClient<$Result.GetResult<Prisma.$HorarioPosiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioPosible that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioPosibleFindFirstArgs} args - Arguments to find a HorarioPosible
     * @example
     * // Get one HorarioPosible
     * const horarioPosible = await prisma.horarioPosible.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorarioPosibleFindFirstArgs>(args?: SelectSubset<T, HorarioPosibleFindFirstArgs<ExtArgs>>): Prisma__HorarioPosibleClient<$Result.GetResult<Prisma.$HorarioPosiblePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioPosible that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioPosibleFindFirstOrThrowArgs} args - Arguments to find a HorarioPosible
     * @example
     * // Get one HorarioPosible
     * const horarioPosible = await prisma.horarioPosible.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorarioPosibleFindFirstOrThrowArgs>(args?: SelectSubset<T, HorarioPosibleFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorarioPosibleClient<$Result.GetResult<Prisma.$HorarioPosiblePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorarioPosibles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioPosibleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorarioPosibles
     * const horarioPosibles = await prisma.horarioPosible.findMany()
     * 
     * // Get first 10 HorarioPosibles
     * const horarioPosibles = await prisma.horarioPosible.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horarioPosibleWithIdOnly = await prisma.horarioPosible.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorarioPosibleFindManyArgs>(args?: SelectSubset<T, HorarioPosibleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioPosiblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorarioPosible.
     * @param {HorarioPosibleCreateArgs} args - Arguments to create a HorarioPosible.
     * @example
     * // Create one HorarioPosible
     * const HorarioPosible = await prisma.horarioPosible.create({
     *   data: {
     *     // ... data to create a HorarioPosible
     *   }
     * })
     * 
     */
    create<T extends HorarioPosibleCreateArgs>(args: SelectSubset<T, HorarioPosibleCreateArgs<ExtArgs>>): Prisma__HorarioPosibleClient<$Result.GetResult<Prisma.$HorarioPosiblePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorarioPosibles.
     * @param {HorarioPosibleCreateManyArgs} args - Arguments to create many HorarioPosibles.
     * @example
     * // Create many HorarioPosibles
     * const horarioPosible = await prisma.horarioPosible.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorarioPosibleCreateManyArgs>(args?: SelectSubset<T, HorarioPosibleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HorarioPosible.
     * @param {HorarioPosibleDeleteArgs} args - Arguments to delete one HorarioPosible.
     * @example
     * // Delete one HorarioPosible
     * const HorarioPosible = await prisma.horarioPosible.delete({
     *   where: {
     *     // ... filter to delete one HorarioPosible
     *   }
     * })
     * 
     */
    delete<T extends HorarioPosibleDeleteArgs>(args: SelectSubset<T, HorarioPosibleDeleteArgs<ExtArgs>>): Prisma__HorarioPosibleClient<$Result.GetResult<Prisma.$HorarioPosiblePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorarioPosible.
     * @param {HorarioPosibleUpdateArgs} args - Arguments to update one HorarioPosible.
     * @example
     * // Update one HorarioPosible
     * const horarioPosible = await prisma.horarioPosible.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorarioPosibleUpdateArgs>(args: SelectSubset<T, HorarioPosibleUpdateArgs<ExtArgs>>): Prisma__HorarioPosibleClient<$Result.GetResult<Prisma.$HorarioPosiblePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorarioPosibles.
     * @param {HorarioPosibleDeleteManyArgs} args - Arguments to filter HorarioPosibles to delete.
     * @example
     * // Delete a few HorarioPosibles
     * const { count } = await prisma.horarioPosible.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorarioPosibleDeleteManyArgs>(args?: SelectSubset<T, HorarioPosibleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorarioPosibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioPosibleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorarioPosibles
     * const horarioPosible = await prisma.horarioPosible.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorarioPosibleUpdateManyArgs>(args: SelectSubset<T, HorarioPosibleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HorarioPosible.
     * @param {HorarioPosibleUpsertArgs} args - Arguments to update or create a HorarioPosible.
     * @example
     * // Update or create a HorarioPosible
     * const horarioPosible = await prisma.horarioPosible.upsert({
     *   create: {
     *     // ... data to create a HorarioPosible
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorarioPosible we want to update
     *   }
     * })
     */
    upsert<T extends HorarioPosibleUpsertArgs>(args: SelectSubset<T, HorarioPosibleUpsertArgs<ExtArgs>>): Prisma__HorarioPosibleClient<$Result.GetResult<Prisma.$HorarioPosiblePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorarioPosibles that matches the filter.
     * @param {HorarioPosibleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const horarioPosible = await prisma.horarioPosible.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HorarioPosibleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HorarioPosible.
     * @param {HorarioPosibleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const horarioPosible = await prisma.horarioPosible.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HorarioPosibleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of HorarioPosibles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioPosibleCountArgs} args - Arguments to filter HorarioPosibles to count.
     * @example
     * // Count the number of HorarioPosibles
     * const count = await prisma.horarioPosible.count({
     *   where: {
     *     // ... the filter for the HorarioPosibles we want to count
     *   }
     * })
    **/
    count<T extends HorarioPosibleCountArgs>(
      args?: Subset<T, HorarioPosibleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorarioPosibleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorarioPosible.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioPosibleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorarioPosibleAggregateArgs>(args: Subset<T, HorarioPosibleAggregateArgs>): Prisma.PrismaPromise<GetHorarioPosibleAggregateType<T>>

    /**
     * Group by HorarioPosible.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioPosibleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HorarioPosibleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorarioPosibleGroupByArgs['orderBy'] }
        : { orderBy?: HorarioPosibleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HorarioPosibleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioPosibleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorarioPosible model
   */
  readonly fields: HorarioPosibleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorarioPosible.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorarioPosibleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HorarioPosible model
   */
  interface HorarioPosibleFieldRefs {
    readonly id: FieldRef<"HorarioPosible", 'String'>
    readonly dia: FieldRef<"HorarioPosible", 'String'>
    readonly horarioComienzo: FieldRef<"HorarioPosible", 'String'>
    readonly abierto: FieldRef<"HorarioPosible", 'Boolean'>
    readonly mostrar: FieldRef<"HorarioPosible", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * HorarioPosible findUnique
   */
  export type HorarioPosibleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioPosible
     */
    select?: HorarioPosibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioPosible
     */
    omit?: HorarioPosibleOmit<ExtArgs> | null
    /**
     * Filter, which HorarioPosible to fetch.
     */
    where: HorarioPosibleWhereUniqueInput
  }

  /**
   * HorarioPosible findUniqueOrThrow
   */
  export type HorarioPosibleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioPosible
     */
    select?: HorarioPosibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioPosible
     */
    omit?: HorarioPosibleOmit<ExtArgs> | null
    /**
     * Filter, which HorarioPosible to fetch.
     */
    where: HorarioPosibleWhereUniqueInput
  }

  /**
   * HorarioPosible findFirst
   */
  export type HorarioPosibleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioPosible
     */
    select?: HorarioPosibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioPosible
     */
    omit?: HorarioPosibleOmit<ExtArgs> | null
    /**
     * Filter, which HorarioPosible to fetch.
     */
    where?: HorarioPosibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioPosibles to fetch.
     */
    orderBy?: HorarioPosibleOrderByWithRelationInput | HorarioPosibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioPosibles.
     */
    cursor?: HorarioPosibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioPosibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioPosibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioPosibles.
     */
    distinct?: HorarioPosibleScalarFieldEnum | HorarioPosibleScalarFieldEnum[]
  }

  /**
   * HorarioPosible findFirstOrThrow
   */
  export type HorarioPosibleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioPosible
     */
    select?: HorarioPosibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioPosible
     */
    omit?: HorarioPosibleOmit<ExtArgs> | null
    /**
     * Filter, which HorarioPosible to fetch.
     */
    where?: HorarioPosibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioPosibles to fetch.
     */
    orderBy?: HorarioPosibleOrderByWithRelationInput | HorarioPosibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioPosibles.
     */
    cursor?: HorarioPosibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioPosibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioPosibles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioPosibles.
     */
    distinct?: HorarioPosibleScalarFieldEnum | HorarioPosibleScalarFieldEnum[]
  }

  /**
   * HorarioPosible findMany
   */
  export type HorarioPosibleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioPosible
     */
    select?: HorarioPosibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioPosible
     */
    omit?: HorarioPosibleOmit<ExtArgs> | null
    /**
     * Filter, which HorarioPosibles to fetch.
     */
    where?: HorarioPosibleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioPosibles to fetch.
     */
    orderBy?: HorarioPosibleOrderByWithRelationInput | HorarioPosibleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorarioPosibles.
     */
    cursor?: HorarioPosibleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioPosibles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioPosibles.
     */
    skip?: number
    distinct?: HorarioPosibleScalarFieldEnum | HorarioPosibleScalarFieldEnum[]
  }

  /**
   * HorarioPosible create
   */
  export type HorarioPosibleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioPosible
     */
    select?: HorarioPosibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioPosible
     */
    omit?: HorarioPosibleOmit<ExtArgs> | null
    /**
     * The data needed to create a HorarioPosible.
     */
    data: XOR<HorarioPosibleCreateInput, HorarioPosibleUncheckedCreateInput>
  }

  /**
   * HorarioPosible createMany
   */
  export type HorarioPosibleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorarioPosibles.
     */
    data: HorarioPosibleCreateManyInput | HorarioPosibleCreateManyInput[]
  }

  /**
   * HorarioPosible update
   */
  export type HorarioPosibleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioPosible
     */
    select?: HorarioPosibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioPosible
     */
    omit?: HorarioPosibleOmit<ExtArgs> | null
    /**
     * The data needed to update a HorarioPosible.
     */
    data: XOR<HorarioPosibleUpdateInput, HorarioPosibleUncheckedUpdateInput>
    /**
     * Choose, which HorarioPosible to update.
     */
    where: HorarioPosibleWhereUniqueInput
  }

  /**
   * HorarioPosible updateMany
   */
  export type HorarioPosibleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorarioPosibles.
     */
    data: XOR<HorarioPosibleUpdateManyMutationInput, HorarioPosibleUncheckedUpdateManyInput>
    /**
     * Filter which HorarioPosibles to update
     */
    where?: HorarioPosibleWhereInput
    /**
     * Limit how many HorarioPosibles to update.
     */
    limit?: number
  }

  /**
   * HorarioPosible upsert
   */
  export type HorarioPosibleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioPosible
     */
    select?: HorarioPosibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioPosible
     */
    omit?: HorarioPosibleOmit<ExtArgs> | null
    /**
     * The filter to search for the HorarioPosible to update in case it exists.
     */
    where: HorarioPosibleWhereUniqueInput
    /**
     * In case the HorarioPosible found by the `where` argument doesn't exist, create a new HorarioPosible with this data.
     */
    create: XOR<HorarioPosibleCreateInput, HorarioPosibleUncheckedCreateInput>
    /**
     * In case the HorarioPosible was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorarioPosibleUpdateInput, HorarioPosibleUncheckedUpdateInput>
  }

  /**
   * HorarioPosible delete
   */
  export type HorarioPosibleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioPosible
     */
    select?: HorarioPosibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioPosible
     */
    omit?: HorarioPosibleOmit<ExtArgs> | null
    /**
     * Filter which HorarioPosible to delete.
     */
    where: HorarioPosibleWhereUniqueInput
  }

  /**
   * HorarioPosible deleteMany
   */
  export type HorarioPosibleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioPosibles to delete
     */
    where?: HorarioPosibleWhereInput
    /**
     * Limit how many HorarioPosibles to delete.
     */
    limit?: number
  }

  /**
   * HorarioPosible findRaw
   */
  export type HorarioPosibleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HorarioPosible aggregateRaw
   */
  export type HorarioPosibleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HorarioPosible without action
   */
  export type HorarioPosibleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioPosible
     */
    select?: HorarioPosibleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioPosible
     */
    omit?: HorarioPosibleOmit<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    twoFactorSecret: string | null
    twoFactorActivated: boolean | null
    role: $Enums.Role | null
    tokenDeVerificacion: string | null
    cuentaVerificada: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    twoFactorSecret: string | null
    twoFactorActivated: boolean | null
    role: $Enums.Role | null
    tokenDeVerificacion: string | null
    cuentaVerificada: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    twoFactorSecret: number
    twoFactorActivated: number
    role: number
    tokenDeVerificacion: number
    cuentaVerificada: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    twoFactorSecret?: true
    twoFactorActivated?: true
    role?: true
    tokenDeVerificacion?: true
    cuentaVerificada?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    twoFactorSecret?: true
    twoFactorActivated?: true
    role?: true
    tokenDeVerificacion?: true
    cuentaVerificada?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    twoFactorSecret?: true
    twoFactorActivated?: true
    role?: true
    tokenDeVerificacion?: true
    cuentaVerificada?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    createdAt: Date
    updatedAt: Date
    twoFactorSecret: string
    twoFactorActivated: boolean
    role: $Enums.Role
    tokenDeVerificacion: string | null
    cuentaVerificada: boolean
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    twoFactorSecret?: boolean
    twoFactorActivated?: boolean
    role?: boolean
    tokenDeVerificacion?: boolean
    cuentaVerificada?: boolean
    turnos?: boolean | Usuario$turnosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    twoFactorSecret?: boolean
    twoFactorActivated?: boolean
    role?: boolean
    tokenDeVerificacion?: boolean
    cuentaVerificada?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt" | "twoFactorSecret" | "twoFactorActivated" | "role" | "tokenDeVerificacion" | "cuentaVerificada", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    turnos?: boolean | Usuario$turnosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      turnos: Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      createdAt: Date
      updatedAt: Date
      twoFactorSecret: string
      twoFactorActivated: boolean
      role: $Enums.Role
      tokenDeVerificacion: string | null
      cuentaVerificada: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * @param {UsuarioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const usuario = await prisma.usuario.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UsuarioFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Usuario.
     * @param {UsuarioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const usuario = await prisma.usuario.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UsuarioAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    turnos<T extends Usuario$turnosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly name: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
    readonly twoFactorSecret: FieldRef<"Usuario", 'String'>
    readonly twoFactorActivated: FieldRef<"Usuario", 'Boolean'>
    readonly role: FieldRef<"Usuario", 'Role'>
    readonly tokenDeVerificacion: FieldRef<"Usuario", 'String'>
    readonly cuentaVerificada: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario findRaw
   */
  export type UsuarioFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Usuario aggregateRaw
   */
  export type UsuarioAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Usuario.turnos
   */
  export type Usuario$turnosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
    where?: TurnoRegistradoPorClienteWhereInput
    orderBy?: TurnoRegistradoPorClienteOrderByWithRelationInput | TurnoRegistradoPorClienteOrderByWithRelationInput[]
    cursor?: TurnoRegistradoPorClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnoRegistradoPorClienteScalarFieldEnum | TurnoRegistradoPorClienteScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model TurnoRegistradoPorCliente
   */

  export type AggregateTurnoRegistradoPorCliente = {
    _count: TurnoRegistradoPorClienteCountAggregateOutputType | null
    _avg: TurnoRegistradoPorClienteAvgAggregateOutputType | null
    _sum: TurnoRegistradoPorClienteSumAggregateOutputType | null
    _min: TurnoRegistradoPorClienteMinAggregateOutputType | null
    _max: TurnoRegistradoPorClienteMaxAggregateOutputType | null
  }

  export type TurnoRegistradoPorClienteAvgAggregateOutputType = {
    cantidadModulos: number | null
  }

  export type TurnoRegistradoPorClienteSumAggregateOutputType = {
    cantidadModulos: number | null
  }

  export type TurnoRegistradoPorClienteMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    usuarioId: string | null
    cancha: $Enums.Cancha | null
    dia: $Enums.Dia | null
    horaComienzo: string | null
    horaFinaliza: string | null
    cantidadModulos: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurnoRegistradoPorClienteMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    usuarioId: string | null
    cancha: $Enums.Cancha | null
    dia: $Enums.Dia | null
    horaComienzo: string | null
    horaFinaliza: string | null
    cantidadModulos: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TurnoRegistradoPorClienteCountAggregateOutputType = {
    id: number
    fecha: number
    usuarioId: number
    cancha: number
    dia: number
    horaComienzo: number
    horaFinaliza: number
    cantidadModulos: number
    modulosOcupados: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TurnoRegistradoPorClienteAvgAggregateInputType = {
    cantidadModulos?: true
  }

  export type TurnoRegistradoPorClienteSumAggregateInputType = {
    cantidadModulos?: true
  }

  export type TurnoRegistradoPorClienteMinAggregateInputType = {
    id?: true
    fecha?: true
    usuarioId?: true
    cancha?: true
    dia?: true
    horaComienzo?: true
    horaFinaliza?: true
    cantidadModulos?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurnoRegistradoPorClienteMaxAggregateInputType = {
    id?: true
    fecha?: true
    usuarioId?: true
    cancha?: true
    dia?: true
    horaComienzo?: true
    horaFinaliza?: true
    cantidadModulos?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TurnoRegistradoPorClienteCountAggregateInputType = {
    id?: true
    fecha?: true
    usuarioId?: true
    cancha?: true
    dia?: true
    horaComienzo?: true
    horaFinaliza?: true
    cantidadModulos?: true
    modulosOcupados?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TurnoRegistradoPorClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TurnoRegistradoPorCliente to aggregate.
     */
    where?: TurnoRegistradoPorClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoRegistradoPorClientes to fetch.
     */
    orderBy?: TurnoRegistradoPorClienteOrderByWithRelationInput | TurnoRegistradoPorClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnoRegistradoPorClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoRegistradoPorClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoRegistradoPorClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TurnoRegistradoPorClientes
    **/
    _count?: true | TurnoRegistradoPorClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnoRegistradoPorClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnoRegistradoPorClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnoRegistradoPorClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnoRegistradoPorClienteMaxAggregateInputType
  }

  export type GetTurnoRegistradoPorClienteAggregateType<T extends TurnoRegistradoPorClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateTurnoRegistradoPorCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurnoRegistradoPorCliente[P]>
      : GetScalarType<T[P], AggregateTurnoRegistradoPorCliente[P]>
  }




  export type TurnoRegistradoPorClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnoRegistradoPorClienteWhereInput
    orderBy?: TurnoRegistradoPorClienteOrderByWithAggregationInput | TurnoRegistradoPorClienteOrderByWithAggregationInput[]
    by: TurnoRegistradoPorClienteScalarFieldEnum[] | TurnoRegistradoPorClienteScalarFieldEnum
    having?: TurnoRegistradoPorClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnoRegistradoPorClienteCountAggregateInputType | true
    _avg?: TurnoRegistradoPorClienteAvgAggregateInputType
    _sum?: TurnoRegistradoPorClienteSumAggregateInputType
    _min?: TurnoRegistradoPorClienteMinAggregateInputType
    _max?: TurnoRegistradoPorClienteMaxAggregateInputType
  }

  export type TurnoRegistradoPorClienteGroupByOutputType = {
    id: string
    fecha: Date
    usuarioId: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados: string[]
    createdAt: Date
    updatedAt: Date
    _count: TurnoRegistradoPorClienteCountAggregateOutputType | null
    _avg: TurnoRegistradoPorClienteAvgAggregateOutputType | null
    _sum: TurnoRegistradoPorClienteSumAggregateOutputType | null
    _min: TurnoRegistradoPorClienteMinAggregateOutputType | null
    _max: TurnoRegistradoPorClienteMaxAggregateOutputType | null
  }

  type GetTurnoRegistradoPorClienteGroupByPayload<T extends TurnoRegistradoPorClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnoRegistradoPorClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnoRegistradoPorClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnoRegistradoPorClienteGroupByOutputType[P]>
            : GetScalarType<T[P], TurnoRegistradoPorClienteGroupByOutputType[P]>
        }
      >
    >


  export type TurnoRegistradoPorClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    usuarioId?: boolean
    cancha?: boolean
    dia?: boolean
    horaComienzo?: boolean
    horaFinaliza?: boolean
    cantidadModulos?: boolean
    modulosOcupados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turnoRegistradoPorCliente"]>



  export type TurnoRegistradoPorClienteSelectScalar = {
    id?: boolean
    fecha?: boolean
    usuarioId?: boolean
    cancha?: boolean
    dia?: boolean
    horaComienzo?: boolean
    horaFinaliza?: boolean
    cantidadModulos?: boolean
    modulosOcupados?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TurnoRegistradoPorClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha" | "usuarioId" | "cancha" | "dia" | "horaComienzo" | "horaFinaliza" | "cantidadModulos" | "modulosOcupados" | "createdAt" | "updatedAt", ExtArgs["result"]["turnoRegistradoPorCliente"]>
  export type TurnoRegistradoPorClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $TurnoRegistradoPorClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TurnoRegistradoPorCliente"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      usuarioId: string
      cancha: $Enums.Cancha
      dia: $Enums.Dia
      horaComienzo: string
      horaFinaliza: string
      cantidadModulos: number
      modulosOcupados: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["turnoRegistradoPorCliente"]>
    composites: {}
  }

  type TurnoRegistradoPorClienteGetPayload<S extends boolean | null | undefined | TurnoRegistradoPorClienteDefaultArgs> = $Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload, S>

  type TurnoRegistradoPorClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TurnoRegistradoPorClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TurnoRegistradoPorClienteCountAggregateInputType | true
    }

  export interface TurnoRegistradoPorClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TurnoRegistradoPorCliente'], meta: { name: 'TurnoRegistradoPorCliente' } }
    /**
     * Find zero or one TurnoRegistradoPorCliente that matches the filter.
     * @param {TurnoRegistradoPorClienteFindUniqueArgs} args - Arguments to find a TurnoRegistradoPorCliente
     * @example
     * // Get one TurnoRegistradoPorCliente
     * const turnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TurnoRegistradoPorClienteFindUniqueArgs>(args: SelectSubset<T, TurnoRegistradoPorClienteFindUniqueArgs<ExtArgs>>): Prisma__TurnoRegistradoPorClienteClient<$Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TurnoRegistradoPorCliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TurnoRegistradoPorClienteFindUniqueOrThrowArgs} args - Arguments to find a TurnoRegistradoPorCliente
     * @example
     * // Get one TurnoRegistradoPorCliente
     * const turnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TurnoRegistradoPorClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, TurnoRegistradoPorClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TurnoRegistradoPorClienteClient<$Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TurnoRegistradoPorCliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoRegistradoPorClienteFindFirstArgs} args - Arguments to find a TurnoRegistradoPorCliente
     * @example
     * // Get one TurnoRegistradoPorCliente
     * const turnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TurnoRegistradoPorClienteFindFirstArgs>(args?: SelectSubset<T, TurnoRegistradoPorClienteFindFirstArgs<ExtArgs>>): Prisma__TurnoRegistradoPorClienteClient<$Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TurnoRegistradoPorCliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoRegistradoPorClienteFindFirstOrThrowArgs} args - Arguments to find a TurnoRegistradoPorCliente
     * @example
     * // Get one TurnoRegistradoPorCliente
     * const turnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TurnoRegistradoPorClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, TurnoRegistradoPorClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TurnoRegistradoPorClienteClient<$Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TurnoRegistradoPorClientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoRegistradoPorClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TurnoRegistradoPorClientes
     * const turnoRegistradoPorClientes = await prisma.turnoRegistradoPorCliente.findMany()
     * 
     * // Get first 10 TurnoRegistradoPorClientes
     * const turnoRegistradoPorClientes = await prisma.turnoRegistradoPorCliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnoRegistradoPorClienteWithIdOnly = await prisma.turnoRegistradoPorCliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TurnoRegistradoPorClienteFindManyArgs>(args?: SelectSubset<T, TurnoRegistradoPorClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TurnoRegistradoPorCliente.
     * @param {TurnoRegistradoPorClienteCreateArgs} args - Arguments to create a TurnoRegistradoPorCliente.
     * @example
     * // Create one TurnoRegistradoPorCliente
     * const TurnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.create({
     *   data: {
     *     // ... data to create a TurnoRegistradoPorCliente
     *   }
     * })
     * 
     */
    create<T extends TurnoRegistradoPorClienteCreateArgs>(args: SelectSubset<T, TurnoRegistradoPorClienteCreateArgs<ExtArgs>>): Prisma__TurnoRegistradoPorClienteClient<$Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TurnoRegistradoPorClientes.
     * @param {TurnoRegistradoPorClienteCreateManyArgs} args - Arguments to create many TurnoRegistradoPorClientes.
     * @example
     * // Create many TurnoRegistradoPorClientes
     * const turnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TurnoRegistradoPorClienteCreateManyArgs>(args?: SelectSubset<T, TurnoRegistradoPorClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TurnoRegistradoPorCliente.
     * @param {TurnoRegistradoPorClienteDeleteArgs} args - Arguments to delete one TurnoRegistradoPorCliente.
     * @example
     * // Delete one TurnoRegistradoPorCliente
     * const TurnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.delete({
     *   where: {
     *     // ... filter to delete one TurnoRegistradoPorCliente
     *   }
     * })
     * 
     */
    delete<T extends TurnoRegistradoPorClienteDeleteArgs>(args: SelectSubset<T, TurnoRegistradoPorClienteDeleteArgs<ExtArgs>>): Prisma__TurnoRegistradoPorClienteClient<$Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TurnoRegistradoPorCliente.
     * @param {TurnoRegistradoPorClienteUpdateArgs} args - Arguments to update one TurnoRegistradoPorCliente.
     * @example
     * // Update one TurnoRegistradoPorCliente
     * const turnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TurnoRegistradoPorClienteUpdateArgs>(args: SelectSubset<T, TurnoRegistradoPorClienteUpdateArgs<ExtArgs>>): Prisma__TurnoRegistradoPorClienteClient<$Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TurnoRegistradoPorClientes.
     * @param {TurnoRegistradoPorClienteDeleteManyArgs} args - Arguments to filter TurnoRegistradoPorClientes to delete.
     * @example
     * // Delete a few TurnoRegistradoPorClientes
     * const { count } = await prisma.turnoRegistradoPorCliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TurnoRegistradoPorClienteDeleteManyArgs>(args?: SelectSubset<T, TurnoRegistradoPorClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TurnoRegistradoPorClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoRegistradoPorClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TurnoRegistradoPorClientes
     * const turnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TurnoRegistradoPorClienteUpdateManyArgs>(args: SelectSubset<T, TurnoRegistradoPorClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TurnoRegistradoPorCliente.
     * @param {TurnoRegistradoPorClienteUpsertArgs} args - Arguments to update or create a TurnoRegistradoPorCliente.
     * @example
     * // Update or create a TurnoRegistradoPorCliente
     * const turnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.upsert({
     *   create: {
     *     // ... data to create a TurnoRegistradoPorCliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TurnoRegistradoPorCliente we want to update
     *   }
     * })
     */
    upsert<T extends TurnoRegistradoPorClienteUpsertArgs>(args: SelectSubset<T, TurnoRegistradoPorClienteUpsertArgs<ExtArgs>>): Prisma__TurnoRegistradoPorClienteClient<$Result.GetResult<Prisma.$TurnoRegistradoPorClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TurnoRegistradoPorClientes that matches the filter.
     * @param {TurnoRegistradoPorClienteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const turnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TurnoRegistradoPorClienteFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TurnoRegistradoPorCliente.
     * @param {TurnoRegistradoPorClienteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const turnoRegistradoPorCliente = await prisma.turnoRegistradoPorCliente.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TurnoRegistradoPorClienteAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TurnoRegistradoPorClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoRegistradoPorClienteCountArgs} args - Arguments to filter TurnoRegistradoPorClientes to count.
     * @example
     * // Count the number of TurnoRegistradoPorClientes
     * const count = await prisma.turnoRegistradoPorCliente.count({
     *   where: {
     *     // ... the filter for the TurnoRegistradoPorClientes we want to count
     *   }
     * })
    **/
    count<T extends TurnoRegistradoPorClienteCountArgs>(
      args?: Subset<T, TurnoRegistradoPorClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnoRegistradoPorClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TurnoRegistradoPorCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoRegistradoPorClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurnoRegistradoPorClienteAggregateArgs>(args: Subset<T, TurnoRegistradoPorClienteAggregateArgs>): Prisma.PrismaPromise<GetTurnoRegistradoPorClienteAggregateType<T>>

    /**
     * Group by TurnoRegistradoPorCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnoRegistradoPorClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurnoRegistradoPorClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnoRegistradoPorClienteGroupByArgs['orderBy'] }
        : { orderBy?: TurnoRegistradoPorClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurnoRegistradoPorClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoRegistradoPorClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TurnoRegistradoPorCliente model
   */
  readonly fields: TurnoRegistradoPorClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TurnoRegistradoPorCliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnoRegistradoPorClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TurnoRegistradoPorCliente model
   */
  interface TurnoRegistradoPorClienteFieldRefs {
    readonly id: FieldRef<"TurnoRegistradoPorCliente", 'String'>
    readonly fecha: FieldRef<"TurnoRegistradoPorCliente", 'DateTime'>
    readonly usuarioId: FieldRef<"TurnoRegistradoPorCliente", 'String'>
    readonly cancha: FieldRef<"TurnoRegistradoPorCliente", 'Cancha'>
    readonly dia: FieldRef<"TurnoRegistradoPorCliente", 'Dia'>
    readonly horaComienzo: FieldRef<"TurnoRegistradoPorCliente", 'String'>
    readonly horaFinaliza: FieldRef<"TurnoRegistradoPorCliente", 'String'>
    readonly cantidadModulos: FieldRef<"TurnoRegistradoPorCliente", 'Int'>
    readonly modulosOcupados: FieldRef<"TurnoRegistradoPorCliente", 'String[]'>
    readonly createdAt: FieldRef<"TurnoRegistradoPorCliente", 'DateTime'>
    readonly updatedAt: FieldRef<"TurnoRegistradoPorCliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TurnoRegistradoPorCliente findUnique
   */
  export type TurnoRegistradoPorClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
    /**
     * Filter, which TurnoRegistradoPorCliente to fetch.
     */
    where: TurnoRegistradoPorClienteWhereUniqueInput
  }

  /**
   * TurnoRegistradoPorCliente findUniqueOrThrow
   */
  export type TurnoRegistradoPorClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
    /**
     * Filter, which TurnoRegistradoPorCliente to fetch.
     */
    where: TurnoRegistradoPorClienteWhereUniqueInput
  }

  /**
   * TurnoRegistradoPorCliente findFirst
   */
  export type TurnoRegistradoPorClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
    /**
     * Filter, which TurnoRegistradoPorCliente to fetch.
     */
    where?: TurnoRegistradoPorClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoRegistradoPorClientes to fetch.
     */
    orderBy?: TurnoRegistradoPorClienteOrderByWithRelationInput | TurnoRegistradoPorClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TurnoRegistradoPorClientes.
     */
    cursor?: TurnoRegistradoPorClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoRegistradoPorClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoRegistradoPorClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TurnoRegistradoPorClientes.
     */
    distinct?: TurnoRegistradoPorClienteScalarFieldEnum | TurnoRegistradoPorClienteScalarFieldEnum[]
  }

  /**
   * TurnoRegistradoPorCliente findFirstOrThrow
   */
  export type TurnoRegistradoPorClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
    /**
     * Filter, which TurnoRegistradoPorCliente to fetch.
     */
    where?: TurnoRegistradoPorClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoRegistradoPorClientes to fetch.
     */
    orderBy?: TurnoRegistradoPorClienteOrderByWithRelationInput | TurnoRegistradoPorClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TurnoRegistradoPorClientes.
     */
    cursor?: TurnoRegistradoPorClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoRegistradoPorClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoRegistradoPorClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TurnoRegistradoPorClientes.
     */
    distinct?: TurnoRegistradoPorClienteScalarFieldEnum | TurnoRegistradoPorClienteScalarFieldEnum[]
  }

  /**
   * TurnoRegistradoPorCliente findMany
   */
  export type TurnoRegistradoPorClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
    /**
     * Filter, which TurnoRegistradoPorClientes to fetch.
     */
    where?: TurnoRegistradoPorClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TurnoRegistradoPorClientes to fetch.
     */
    orderBy?: TurnoRegistradoPorClienteOrderByWithRelationInput | TurnoRegistradoPorClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TurnoRegistradoPorClientes.
     */
    cursor?: TurnoRegistradoPorClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TurnoRegistradoPorClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TurnoRegistradoPorClientes.
     */
    skip?: number
    distinct?: TurnoRegistradoPorClienteScalarFieldEnum | TurnoRegistradoPorClienteScalarFieldEnum[]
  }

  /**
   * TurnoRegistradoPorCliente create
   */
  export type TurnoRegistradoPorClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a TurnoRegistradoPorCliente.
     */
    data: XOR<TurnoRegistradoPorClienteCreateInput, TurnoRegistradoPorClienteUncheckedCreateInput>
  }

  /**
   * TurnoRegistradoPorCliente createMany
   */
  export type TurnoRegistradoPorClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TurnoRegistradoPorClientes.
     */
    data: TurnoRegistradoPorClienteCreateManyInput | TurnoRegistradoPorClienteCreateManyInput[]
  }

  /**
   * TurnoRegistradoPorCliente update
   */
  export type TurnoRegistradoPorClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a TurnoRegistradoPorCliente.
     */
    data: XOR<TurnoRegistradoPorClienteUpdateInput, TurnoRegistradoPorClienteUncheckedUpdateInput>
    /**
     * Choose, which TurnoRegistradoPorCliente to update.
     */
    where: TurnoRegistradoPorClienteWhereUniqueInput
  }

  /**
   * TurnoRegistradoPorCliente updateMany
   */
  export type TurnoRegistradoPorClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TurnoRegistradoPorClientes.
     */
    data: XOR<TurnoRegistradoPorClienteUpdateManyMutationInput, TurnoRegistradoPorClienteUncheckedUpdateManyInput>
    /**
     * Filter which TurnoRegistradoPorClientes to update
     */
    where?: TurnoRegistradoPorClienteWhereInput
    /**
     * Limit how many TurnoRegistradoPorClientes to update.
     */
    limit?: number
  }

  /**
   * TurnoRegistradoPorCliente upsert
   */
  export type TurnoRegistradoPorClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the TurnoRegistradoPorCliente to update in case it exists.
     */
    where: TurnoRegistradoPorClienteWhereUniqueInput
    /**
     * In case the TurnoRegistradoPorCliente found by the `where` argument doesn't exist, create a new TurnoRegistradoPorCliente with this data.
     */
    create: XOR<TurnoRegistradoPorClienteCreateInput, TurnoRegistradoPorClienteUncheckedCreateInput>
    /**
     * In case the TurnoRegistradoPorCliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnoRegistradoPorClienteUpdateInput, TurnoRegistradoPorClienteUncheckedUpdateInput>
  }

  /**
   * TurnoRegistradoPorCliente delete
   */
  export type TurnoRegistradoPorClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
    /**
     * Filter which TurnoRegistradoPorCliente to delete.
     */
    where: TurnoRegistradoPorClienteWhereUniqueInput
  }

  /**
   * TurnoRegistradoPorCliente deleteMany
   */
  export type TurnoRegistradoPorClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TurnoRegistradoPorClientes to delete
     */
    where?: TurnoRegistradoPorClienteWhereInput
    /**
     * Limit how many TurnoRegistradoPorClientes to delete.
     */
    limit?: number
  }

  /**
   * TurnoRegistradoPorCliente findRaw
   */
  export type TurnoRegistradoPorClienteFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TurnoRegistradoPorCliente aggregateRaw
   */
  export type TurnoRegistradoPorClienteAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TurnoRegistradoPorCliente without action
   */
  export type TurnoRegistradoPorClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnoRegistradoPorCliente
     */
    select?: TurnoRegistradoPorClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TurnoRegistradoPorCliente
     */
    omit?: TurnoRegistradoPorClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnoRegistradoPorClienteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ClienteScalarFieldEnum: {
    id: 'id',
    email: 'email',
    telefono: 'telefono',
    nombre: 'nombre',
    dni: 'dni',
    informacion: 'informacion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const TurnoFijoScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    cancha: 'cancha',
    dia: 'dia',
    horaComienzo: 'horaComienzo',
    cantidadModulos: 'cantidadModulos',
    horaFinaliza: 'horaFinaliza',
    modulosOcupados: 'modulosOcupados',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TurnoFijoScalarFieldEnum = (typeof TurnoFijoScalarFieldEnum)[keyof typeof TurnoFijoScalarFieldEnum]


  export const TurnoPuntualScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    clienteId: 'clienteId',
    cancha: 'cancha',
    dia: 'dia',
    horaComienzo: 'horaComienzo',
    horaFinaliza: 'horaFinaliza',
    cantidadModulos: 'cantidadModulos',
    modulosOcupados: 'modulosOcupados',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TurnoPuntualScalarFieldEnum = (typeof TurnoPuntualScalarFieldEnum)[keyof typeof TurnoPuntualScalarFieldEnum]


  export const HorarioPosibleScalarFieldEnum: {
    id: 'id',
    dia: 'dia',
    horarioComienzo: 'horarioComienzo',
    abierto: 'abierto',
    mostrar: 'mostrar'
  };

  export type HorarioPosibleScalarFieldEnum = (typeof HorarioPosibleScalarFieldEnum)[keyof typeof HorarioPosibleScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    twoFactorSecret: 'twoFactorSecret',
    twoFactorActivated: 'twoFactorActivated',
    role: 'role',
    tokenDeVerificacion: 'tokenDeVerificacion',
    cuentaVerificada: 'cuentaVerificada'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TurnoRegistradoPorClienteScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    usuarioId: 'usuarioId',
    cancha: 'cancha',
    dia: 'dia',
    horaComienzo: 'horaComienzo',
    horaFinaliza: 'horaFinaliza',
    cantidadModulos: 'cantidadModulos',
    modulosOcupados: 'modulosOcupados',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TurnoRegistradoPorClienteScalarFieldEnum = (typeof TurnoRegistradoPorClienteScalarFieldEnum)[keyof typeof TurnoRegistradoPorClienteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Cancha'
   */
  export type EnumCanchaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Cancha'>
    


  /**
   * Reference to a field of type 'Cancha[]'
   */
  export type ListEnumCanchaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Cancha[]'>
    


  /**
   * Reference to a field of type 'Dia'
   */
  export type EnumDiaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Dia'>
    


  /**
   * Reference to a field of type 'Dia[]'
   */
  export type ListEnumDiaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Dia[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    nombre?: StringFilter<"Cliente"> | string
    dni?: StringFilter<"Cliente"> | string
    informacion?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    fijos?: TurnoFijoListRelationFilter
    puntual?: TurnoPuntualListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    informacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fijos?: TurnoFijoOrderByRelationAggregateInput
    puntual?: TurnoPuntualOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    email?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    nombre?: StringFilter<"Cliente"> | string
    dni?: StringFilter<"Cliente"> | string
    informacion?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    fijos?: TurnoFijoListRelationFilter
    puntual?: TurnoPuntualListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    informacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringWithAggregatesFilter<"Cliente"> | string
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    dni?: StringWithAggregatesFilter<"Cliente"> | string
    informacion?: StringWithAggregatesFilter<"Cliente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type TurnoFijoWhereInput = {
    AND?: TurnoFijoWhereInput | TurnoFijoWhereInput[]
    OR?: TurnoFijoWhereInput[]
    NOT?: TurnoFijoWhereInput | TurnoFijoWhereInput[]
    id?: StringFilter<"TurnoFijo"> | string
    clienteId?: StringFilter<"TurnoFijo"> | string
    cancha?: EnumCanchaFilter<"TurnoFijo"> | $Enums.Cancha
    dia?: EnumDiaFilter<"TurnoFijo"> | $Enums.Dia
    horaComienzo?: StringFilter<"TurnoFijo"> | string
    cantidadModulos?: IntFilter<"TurnoFijo"> | number
    horaFinaliza?: StringFilter<"TurnoFijo"> | string
    modulosOcupados?: StringNullableListFilter<"TurnoFijo">
    createdAt?: DateTimeFilter<"TurnoFijo"> | Date | string
    updatedAt?: DateTimeFilter<"TurnoFijo"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type TurnoFijoOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    cantidadModulos?: SortOrder
    horaFinaliza?: SortOrder
    modulosOcupados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
  }

  export type TurnoFijoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TurnoFijoWhereInput | TurnoFijoWhereInput[]
    OR?: TurnoFijoWhereInput[]
    NOT?: TurnoFijoWhereInput | TurnoFijoWhereInput[]
    clienteId?: StringFilter<"TurnoFijo"> | string
    cancha?: EnumCanchaFilter<"TurnoFijo"> | $Enums.Cancha
    dia?: EnumDiaFilter<"TurnoFijo"> | $Enums.Dia
    horaComienzo?: StringFilter<"TurnoFijo"> | string
    cantidadModulos?: IntFilter<"TurnoFijo"> | number
    horaFinaliza?: StringFilter<"TurnoFijo"> | string
    modulosOcupados?: StringNullableListFilter<"TurnoFijo">
    createdAt?: DateTimeFilter<"TurnoFijo"> | Date | string
    updatedAt?: DateTimeFilter<"TurnoFijo"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type TurnoFijoOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    cantidadModulos?: SortOrder
    horaFinaliza?: SortOrder
    modulosOcupados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TurnoFijoCountOrderByAggregateInput
    _avg?: TurnoFijoAvgOrderByAggregateInput
    _max?: TurnoFijoMaxOrderByAggregateInput
    _min?: TurnoFijoMinOrderByAggregateInput
    _sum?: TurnoFijoSumOrderByAggregateInput
  }

  export type TurnoFijoScalarWhereWithAggregatesInput = {
    AND?: TurnoFijoScalarWhereWithAggregatesInput | TurnoFijoScalarWhereWithAggregatesInput[]
    OR?: TurnoFijoScalarWhereWithAggregatesInput[]
    NOT?: TurnoFijoScalarWhereWithAggregatesInput | TurnoFijoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TurnoFijo"> | string
    clienteId?: StringWithAggregatesFilter<"TurnoFijo"> | string
    cancha?: EnumCanchaWithAggregatesFilter<"TurnoFijo"> | $Enums.Cancha
    dia?: EnumDiaWithAggregatesFilter<"TurnoFijo"> | $Enums.Dia
    horaComienzo?: StringWithAggregatesFilter<"TurnoFijo"> | string
    cantidadModulos?: IntWithAggregatesFilter<"TurnoFijo"> | number
    horaFinaliza?: StringWithAggregatesFilter<"TurnoFijo"> | string
    modulosOcupados?: StringNullableListFilter<"TurnoFijo">
    createdAt?: DateTimeWithAggregatesFilter<"TurnoFijo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TurnoFijo"> | Date | string
  }

  export type TurnoPuntualWhereInput = {
    AND?: TurnoPuntualWhereInput | TurnoPuntualWhereInput[]
    OR?: TurnoPuntualWhereInput[]
    NOT?: TurnoPuntualWhereInput | TurnoPuntualWhereInput[]
    id?: StringFilter<"TurnoPuntual"> | string
    fecha?: DateTimeFilter<"TurnoPuntual"> | Date | string
    clienteId?: StringFilter<"TurnoPuntual"> | string
    cancha?: EnumCanchaFilter<"TurnoPuntual"> | $Enums.Cancha
    dia?: EnumDiaFilter<"TurnoPuntual"> | $Enums.Dia
    horaComienzo?: StringFilter<"TurnoPuntual"> | string
    horaFinaliza?: StringFilter<"TurnoPuntual"> | string
    cantidadModulos?: IntFilter<"TurnoPuntual"> | number
    modulosOcupados?: StringNullableListFilter<"TurnoPuntual">
    createdAt?: DateTimeFilter<"TurnoPuntual"> | Date | string
    updatedAt?: DateTimeFilter<"TurnoPuntual"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type TurnoPuntualOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    horaFinaliza?: SortOrder
    cantidadModulos?: SortOrder
    modulosOcupados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
  }

  export type TurnoPuntualWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TurnoPuntualWhereInput | TurnoPuntualWhereInput[]
    OR?: TurnoPuntualWhereInput[]
    NOT?: TurnoPuntualWhereInput | TurnoPuntualWhereInput[]
    fecha?: DateTimeFilter<"TurnoPuntual"> | Date | string
    clienteId?: StringFilter<"TurnoPuntual"> | string
    cancha?: EnumCanchaFilter<"TurnoPuntual"> | $Enums.Cancha
    dia?: EnumDiaFilter<"TurnoPuntual"> | $Enums.Dia
    horaComienzo?: StringFilter<"TurnoPuntual"> | string
    horaFinaliza?: StringFilter<"TurnoPuntual"> | string
    cantidadModulos?: IntFilter<"TurnoPuntual"> | number
    modulosOcupados?: StringNullableListFilter<"TurnoPuntual">
    createdAt?: DateTimeFilter<"TurnoPuntual"> | Date | string
    updatedAt?: DateTimeFilter<"TurnoPuntual"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type TurnoPuntualOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    horaFinaliza?: SortOrder
    cantidadModulos?: SortOrder
    modulosOcupados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TurnoPuntualCountOrderByAggregateInput
    _avg?: TurnoPuntualAvgOrderByAggregateInput
    _max?: TurnoPuntualMaxOrderByAggregateInput
    _min?: TurnoPuntualMinOrderByAggregateInput
    _sum?: TurnoPuntualSumOrderByAggregateInput
  }

  export type TurnoPuntualScalarWhereWithAggregatesInput = {
    AND?: TurnoPuntualScalarWhereWithAggregatesInput | TurnoPuntualScalarWhereWithAggregatesInput[]
    OR?: TurnoPuntualScalarWhereWithAggregatesInput[]
    NOT?: TurnoPuntualScalarWhereWithAggregatesInput | TurnoPuntualScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TurnoPuntual"> | string
    fecha?: DateTimeWithAggregatesFilter<"TurnoPuntual"> | Date | string
    clienteId?: StringWithAggregatesFilter<"TurnoPuntual"> | string
    cancha?: EnumCanchaWithAggregatesFilter<"TurnoPuntual"> | $Enums.Cancha
    dia?: EnumDiaWithAggregatesFilter<"TurnoPuntual"> | $Enums.Dia
    horaComienzo?: StringWithAggregatesFilter<"TurnoPuntual"> | string
    horaFinaliza?: StringWithAggregatesFilter<"TurnoPuntual"> | string
    cantidadModulos?: IntWithAggregatesFilter<"TurnoPuntual"> | number
    modulosOcupados?: StringNullableListFilter<"TurnoPuntual">
    createdAt?: DateTimeWithAggregatesFilter<"TurnoPuntual"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TurnoPuntual"> | Date | string
  }

  export type HorarioPosibleWhereInput = {
    AND?: HorarioPosibleWhereInput | HorarioPosibleWhereInput[]
    OR?: HorarioPosibleWhereInput[]
    NOT?: HorarioPosibleWhereInput | HorarioPosibleWhereInput[]
    id?: StringFilter<"HorarioPosible"> | string
    dia?: StringFilter<"HorarioPosible"> | string
    horarioComienzo?: StringFilter<"HorarioPosible"> | string
    abierto?: BoolFilter<"HorarioPosible"> | boolean
    mostrar?: BoolFilter<"HorarioPosible"> | boolean
  }

  export type HorarioPosibleOrderByWithRelationInput = {
    id?: SortOrder
    dia?: SortOrder
    horarioComienzo?: SortOrder
    abierto?: SortOrder
    mostrar?: SortOrder
  }

  export type HorarioPosibleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HorarioPosibleWhereInput | HorarioPosibleWhereInput[]
    OR?: HorarioPosibleWhereInput[]
    NOT?: HorarioPosibleWhereInput | HorarioPosibleWhereInput[]
    dia?: StringFilter<"HorarioPosible"> | string
    horarioComienzo?: StringFilter<"HorarioPosible"> | string
    abierto?: BoolFilter<"HorarioPosible"> | boolean
    mostrar?: BoolFilter<"HorarioPosible"> | boolean
  }, "id">

  export type HorarioPosibleOrderByWithAggregationInput = {
    id?: SortOrder
    dia?: SortOrder
    horarioComienzo?: SortOrder
    abierto?: SortOrder
    mostrar?: SortOrder
    _count?: HorarioPosibleCountOrderByAggregateInput
    _max?: HorarioPosibleMaxOrderByAggregateInput
    _min?: HorarioPosibleMinOrderByAggregateInput
  }

  export type HorarioPosibleScalarWhereWithAggregatesInput = {
    AND?: HorarioPosibleScalarWhereWithAggregatesInput | HorarioPosibleScalarWhereWithAggregatesInput[]
    OR?: HorarioPosibleScalarWhereWithAggregatesInput[]
    NOT?: HorarioPosibleScalarWhereWithAggregatesInput | HorarioPosibleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HorarioPosible"> | string
    dia?: StringWithAggregatesFilter<"HorarioPosible"> | string
    horarioComienzo?: StringWithAggregatesFilter<"HorarioPosible"> | string
    abierto?: BoolWithAggregatesFilter<"HorarioPosible"> | boolean
    mostrar?: BoolWithAggregatesFilter<"HorarioPosible"> | boolean
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    name?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    twoFactorSecret?: StringFilter<"Usuario"> | string
    twoFactorActivated?: BoolFilter<"Usuario"> | boolean
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    tokenDeVerificacion?: StringNullableFilter<"Usuario"> | string | null
    cuentaVerificada?: BoolFilter<"Usuario"> | boolean
    turnos?: TurnoRegistradoPorClienteListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorActivated?: SortOrder
    role?: SortOrder
    tokenDeVerificacion?: SortOrder
    cuentaVerificada?: SortOrder
    turnos?: TurnoRegistradoPorClienteOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    name?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    twoFactorSecret?: StringFilter<"Usuario"> | string
    twoFactorActivated?: BoolFilter<"Usuario"> | boolean
    role?: EnumRoleFilter<"Usuario"> | $Enums.Role
    tokenDeVerificacion?: StringNullableFilter<"Usuario"> | string | null
    cuentaVerificada?: BoolFilter<"Usuario"> | boolean
    turnos?: TurnoRegistradoPorClienteListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorActivated?: SortOrder
    role?: SortOrder
    tokenDeVerificacion?: SortOrder
    cuentaVerificada?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    name?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    twoFactorSecret?: StringWithAggregatesFilter<"Usuario"> | string
    twoFactorActivated?: BoolWithAggregatesFilter<"Usuario"> | boolean
    role?: EnumRoleWithAggregatesFilter<"Usuario"> | $Enums.Role
    tokenDeVerificacion?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    cuentaVerificada?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type TurnoRegistradoPorClienteWhereInput = {
    AND?: TurnoRegistradoPorClienteWhereInput | TurnoRegistradoPorClienteWhereInput[]
    OR?: TurnoRegistradoPorClienteWhereInput[]
    NOT?: TurnoRegistradoPorClienteWhereInput | TurnoRegistradoPorClienteWhereInput[]
    id?: StringFilter<"TurnoRegistradoPorCliente"> | string
    fecha?: DateTimeFilter<"TurnoRegistradoPorCliente"> | Date | string
    usuarioId?: StringFilter<"TurnoRegistradoPorCliente"> | string
    cancha?: EnumCanchaFilter<"TurnoRegistradoPorCliente"> | $Enums.Cancha
    dia?: EnumDiaFilter<"TurnoRegistradoPorCliente"> | $Enums.Dia
    horaComienzo?: StringFilter<"TurnoRegistradoPorCliente"> | string
    horaFinaliza?: StringFilter<"TurnoRegistradoPorCliente"> | string
    cantidadModulos?: IntFilter<"TurnoRegistradoPorCliente"> | number
    modulosOcupados?: StringNullableListFilter<"TurnoRegistradoPorCliente">
    createdAt?: DateTimeFilter<"TurnoRegistradoPorCliente"> | Date | string
    updatedAt?: DateTimeFilter<"TurnoRegistradoPorCliente"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type TurnoRegistradoPorClienteOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    horaFinaliza?: SortOrder
    cantidadModulos?: SortOrder
    modulosOcupados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type TurnoRegistradoPorClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TurnoRegistradoPorClienteWhereInput | TurnoRegistradoPorClienteWhereInput[]
    OR?: TurnoRegistradoPorClienteWhereInput[]
    NOT?: TurnoRegistradoPorClienteWhereInput | TurnoRegistradoPorClienteWhereInput[]
    fecha?: DateTimeFilter<"TurnoRegistradoPorCliente"> | Date | string
    usuarioId?: StringFilter<"TurnoRegistradoPorCliente"> | string
    cancha?: EnumCanchaFilter<"TurnoRegistradoPorCliente"> | $Enums.Cancha
    dia?: EnumDiaFilter<"TurnoRegistradoPorCliente"> | $Enums.Dia
    horaComienzo?: StringFilter<"TurnoRegistradoPorCliente"> | string
    horaFinaliza?: StringFilter<"TurnoRegistradoPorCliente"> | string
    cantidadModulos?: IntFilter<"TurnoRegistradoPorCliente"> | number
    modulosOcupados?: StringNullableListFilter<"TurnoRegistradoPorCliente">
    createdAt?: DateTimeFilter<"TurnoRegistradoPorCliente"> | Date | string
    updatedAt?: DateTimeFilter<"TurnoRegistradoPorCliente"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type TurnoRegistradoPorClienteOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    horaFinaliza?: SortOrder
    cantidadModulos?: SortOrder
    modulosOcupados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TurnoRegistradoPorClienteCountOrderByAggregateInput
    _avg?: TurnoRegistradoPorClienteAvgOrderByAggregateInput
    _max?: TurnoRegistradoPorClienteMaxOrderByAggregateInput
    _min?: TurnoRegistradoPorClienteMinOrderByAggregateInput
    _sum?: TurnoRegistradoPorClienteSumOrderByAggregateInput
  }

  export type TurnoRegistradoPorClienteScalarWhereWithAggregatesInput = {
    AND?: TurnoRegistradoPorClienteScalarWhereWithAggregatesInput | TurnoRegistradoPorClienteScalarWhereWithAggregatesInput[]
    OR?: TurnoRegistradoPorClienteScalarWhereWithAggregatesInput[]
    NOT?: TurnoRegistradoPorClienteScalarWhereWithAggregatesInput | TurnoRegistradoPorClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TurnoRegistradoPorCliente"> | string
    fecha?: DateTimeWithAggregatesFilter<"TurnoRegistradoPorCliente"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"TurnoRegistradoPorCliente"> | string
    cancha?: EnumCanchaWithAggregatesFilter<"TurnoRegistradoPorCliente"> | $Enums.Cancha
    dia?: EnumDiaWithAggregatesFilter<"TurnoRegistradoPorCliente"> | $Enums.Dia
    horaComienzo?: StringWithAggregatesFilter<"TurnoRegistradoPorCliente"> | string
    horaFinaliza?: StringWithAggregatesFilter<"TurnoRegistradoPorCliente"> | string
    cantidadModulos?: IntWithAggregatesFilter<"TurnoRegistradoPorCliente"> | number
    modulosOcupados?: StringNullableListFilter<"TurnoRegistradoPorCliente">
    createdAt?: DateTimeWithAggregatesFilter<"TurnoRegistradoPorCliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TurnoRegistradoPorCliente"> | Date | string
  }

  export type ClienteCreateInput = {
    id?: string
    email: string
    telefono: string
    nombre: string
    dni?: string
    informacion?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fijos?: TurnoFijoCreateNestedManyWithoutClienteInput
    puntual?: TurnoPuntualCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    email: string
    telefono: string
    nombre: string
    dni?: string
    informacion?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fijos?: TurnoFijoUncheckedCreateNestedManyWithoutClienteInput
    puntual?: TurnoPuntualUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    informacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fijos?: TurnoFijoUpdateManyWithoutClienteNestedInput
    puntual?: TurnoPuntualUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    informacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fijos?: TurnoFijoUncheckedUpdateManyWithoutClienteNestedInput
    puntual?: TurnoPuntualUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    email: string
    telefono: string
    nombre: string
    dni?: string
    informacion?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    informacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    informacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoFijoCreateInput = {
    id?: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    cantidadModulos: number
    horaFinaliza: string
    modulosOcupados?: TurnoFijoCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutFijosInput
  }

  export type TurnoFijoUncheckedCreateInput = {
    id?: string
    clienteId: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    cantidadModulos: number
    horaFinaliza: string
    modulosOcupados?: TurnoFijoCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoFijoUpdateInput = {
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    modulosOcupados?: TurnoFijoUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutFijosNestedInput
  }

  export type TurnoFijoUncheckedUpdateInput = {
    clienteId?: StringFieldUpdateOperationsInput | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    modulosOcupados?: TurnoFijoUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoFijoCreateManyInput = {
    id?: string
    clienteId: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    cantidadModulos: number
    horaFinaliza: string
    modulosOcupados?: TurnoFijoCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoFijoUpdateManyMutationInput = {
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    modulosOcupados?: TurnoFijoUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoFijoUncheckedUpdateManyInput = {
    clienteId?: StringFieldUpdateOperationsInput | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    modulosOcupados?: TurnoFijoUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoPuntualCreateInput = {
    id?: string
    fecha?: Date | string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoPuntualCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutPuntualInput
  }

  export type TurnoPuntualUncheckedCreateInput = {
    id?: string
    fecha?: Date | string
    clienteId: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoPuntualCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoPuntualUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoPuntualUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutPuntualNestedInput
  }

  export type TurnoPuntualUncheckedUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoPuntualUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoPuntualCreateManyInput = {
    id?: string
    fecha?: Date | string
    clienteId: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoPuntualCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoPuntualUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoPuntualUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoPuntualUncheckedUpdateManyInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: StringFieldUpdateOperationsInput | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoPuntualUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioPosibleCreateInput = {
    id?: string
    dia: string
    horarioComienzo: string
    abierto: boolean
    mostrar: boolean
  }

  export type HorarioPosibleUncheckedCreateInput = {
    id?: string
    dia: string
    horarioComienzo: string
    abierto: boolean
    mostrar: boolean
  }

  export type HorarioPosibleUpdateInput = {
    dia?: StringFieldUpdateOperationsInput | string
    horarioComienzo?: StringFieldUpdateOperationsInput | string
    abierto?: BoolFieldUpdateOperationsInput | boolean
    mostrar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioPosibleUncheckedUpdateInput = {
    dia?: StringFieldUpdateOperationsInput | string
    horarioComienzo?: StringFieldUpdateOperationsInput | string
    abierto?: BoolFieldUpdateOperationsInput | boolean
    mostrar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioPosibleCreateManyInput = {
    id?: string
    dia: string
    horarioComienzo: string
    abierto: boolean
    mostrar: boolean
  }

  export type HorarioPosibleUpdateManyMutationInput = {
    dia?: StringFieldUpdateOperationsInput | string
    horarioComienzo?: StringFieldUpdateOperationsInput | string
    abierto?: BoolFieldUpdateOperationsInput | boolean
    mostrar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HorarioPosibleUncheckedUpdateManyInput = {
    dia?: StringFieldUpdateOperationsInput | string
    horarioComienzo?: StringFieldUpdateOperationsInput | string
    abierto?: BoolFieldUpdateOperationsInput | boolean
    mostrar?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorSecret: string
    twoFactorActivated?: boolean
    role?: $Enums.Role
    tokenDeVerificacion?: string | null
    cuentaVerificada?: boolean
    turnos?: TurnoRegistradoPorClienteCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorSecret: string
    twoFactorActivated?: boolean
    role?: $Enums.Role
    tokenDeVerificacion?: string | null
    cuentaVerificada?: boolean
    turnos?: TurnoRegistradoPorClienteUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorSecret?: StringFieldUpdateOperationsInput | string
    twoFactorActivated?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokenDeVerificacion?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaVerificada?: BoolFieldUpdateOperationsInput | boolean
    turnos?: TurnoRegistradoPorClienteUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorSecret?: StringFieldUpdateOperationsInput | string
    twoFactorActivated?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokenDeVerificacion?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaVerificada?: BoolFieldUpdateOperationsInput | boolean
    turnos?: TurnoRegistradoPorClienteUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorSecret: string
    twoFactorActivated?: boolean
    role?: $Enums.Role
    tokenDeVerificacion?: string | null
    cuentaVerificada?: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorSecret?: StringFieldUpdateOperationsInput | string
    twoFactorActivated?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokenDeVerificacion?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaVerificada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorSecret?: StringFieldUpdateOperationsInput | string
    twoFactorActivated?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokenDeVerificacion?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaVerificada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TurnoRegistradoPorClienteCreateInput = {
    id?: string
    fecha?: Date | string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoRegistradoPorClienteCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutTurnosInput
  }

  export type TurnoRegistradoPorClienteUncheckedCreateInput = {
    id?: string
    fecha?: Date | string
    usuarioId: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoRegistradoPorClienteCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoRegistradoPorClienteUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoRegistradoPorClienteUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutTurnosNestedInput
  }

  export type TurnoRegistradoPorClienteUncheckedUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoRegistradoPorClienteUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoRegistradoPorClienteCreateManyInput = {
    id?: string
    fecha?: Date | string
    usuarioId: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoRegistradoPorClienteCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoRegistradoPorClienteUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoRegistradoPorClienteUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoRegistradoPorClienteUncheckedUpdateManyInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoRegistradoPorClienteUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TurnoFijoListRelationFilter = {
    every?: TurnoFijoWhereInput
    some?: TurnoFijoWhereInput
    none?: TurnoFijoWhereInput
  }

  export type TurnoPuntualListRelationFilter = {
    every?: TurnoPuntualWhereInput
    some?: TurnoPuntualWhereInput
    none?: TurnoPuntualWhereInput
  }

  export type TurnoFijoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurnoPuntualOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    informacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    informacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    nombre?: SortOrder
    dni?: SortOrder
    informacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCanchaFilter<$PrismaModel = never> = {
    equals?: $Enums.Cancha | EnumCanchaFieldRefInput<$PrismaModel>
    in?: $Enums.Cancha[] | ListEnumCanchaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cancha[] | ListEnumCanchaFieldRefInput<$PrismaModel>
    not?: NestedEnumCanchaFilter<$PrismaModel> | $Enums.Cancha
  }

  export type EnumDiaFilter<$PrismaModel = never> = {
    equals?: $Enums.Dia | EnumDiaFieldRefInput<$PrismaModel>
    in?: $Enums.Dia[] | ListEnumDiaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Dia[] | ListEnumDiaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaFilter<$PrismaModel> | $Enums.Dia
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type TurnoFijoCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    cantidadModulos?: SortOrder
    horaFinaliza?: SortOrder
    modulosOcupados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoFijoAvgOrderByAggregateInput = {
    cantidadModulos?: SortOrder
  }

  export type TurnoFijoMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    cantidadModulos?: SortOrder
    horaFinaliza?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoFijoMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    cantidadModulos?: SortOrder
    horaFinaliza?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoFijoSumOrderByAggregateInput = {
    cantidadModulos?: SortOrder
  }

  export type EnumCanchaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Cancha | EnumCanchaFieldRefInput<$PrismaModel>
    in?: $Enums.Cancha[] | ListEnumCanchaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cancha[] | ListEnumCanchaFieldRefInput<$PrismaModel>
    not?: NestedEnumCanchaWithAggregatesFilter<$PrismaModel> | $Enums.Cancha
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCanchaFilter<$PrismaModel>
    _max?: NestedEnumCanchaFilter<$PrismaModel>
  }

  export type EnumDiaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Dia | EnumDiaFieldRefInput<$PrismaModel>
    in?: $Enums.Dia[] | ListEnumDiaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Dia[] | ListEnumDiaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaWithAggregatesFilter<$PrismaModel> | $Enums.Dia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaFilter<$PrismaModel>
    _max?: NestedEnumDiaFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TurnoPuntualCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    horaFinaliza?: SortOrder
    cantidadModulos?: SortOrder
    modulosOcupados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoPuntualAvgOrderByAggregateInput = {
    cantidadModulos?: SortOrder
  }

  export type TurnoPuntualMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    horaFinaliza?: SortOrder
    cantidadModulos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoPuntualMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    clienteId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    horaFinaliza?: SortOrder
    cantidadModulos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoPuntualSumOrderByAggregateInput = {
    cantidadModulos?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HorarioPosibleCountOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
    horarioComienzo?: SortOrder
    abierto?: SortOrder
    mostrar?: SortOrder
  }

  export type HorarioPosibleMaxOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
    horarioComienzo?: SortOrder
    abierto?: SortOrder
    mostrar?: SortOrder
  }

  export type HorarioPosibleMinOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
    horarioComienzo?: SortOrder
    abierto?: SortOrder
    mostrar?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type TurnoRegistradoPorClienteListRelationFilter = {
    every?: TurnoRegistradoPorClienteWhereInput
    some?: TurnoRegistradoPorClienteWhereInput
    none?: TurnoRegistradoPorClienteWhereInput
  }

  export type TurnoRegistradoPorClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorActivated?: SortOrder
    role?: SortOrder
    tokenDeVerificacion?: SortOrder
    cuentaVerificada?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorActivated?: SortOrder
    role?: SortOrder
    tokenDeVerificacion?: SortOrder
    cuentaVerificada?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    twoFactorSecret?: SortOrder
    twoFactorActivated?: SortOrder
    role?: SortOrder
    tokenDeVerificacion?: SortOrder
    cuentaVerificada?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type TurnoRegistradoPorClienteCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    horaFinaliza?: SortOrder
    cantidadModulos?: SortOrder
    modulosOcupados?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoRegistradoPorClienteAvgOrderByAggregateInput = {
    cantidadModulos?: SortOrder
  }

  export type TurnoRegistradoPorClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    horaFinaliza?: SortOrder
    cantidadModulos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoRegistradoPorClienteMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    cancha?: SortOrder
    dia?: SortOrder
    horaComienzo?: SortOrder
    horaFinaliza?: SortOrder
    cantidadModulos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TurnoRegistradoPorClienteSumOrderByAggregateInput = {
    cantidadModulos?: SortOrder
  }

  export type TurnoFijoCreateNestedManyWithoutClienteInput = {
    create?: XOR<TurnoFijoCreateWithoutClienteInput, TurnoFijoUncheckedCreateWithoutClienteInput> | TurnoFijoCreateWithoutClienteInput[] | TurnoFijoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TurnoFijoCreateOrConnectWithoutClienteInput | TurnoFijoCreateOrConnectWithoutClienteInput[]
    createMany?: TurnoFijoCreateManyClienteInputEnvelope
    connect?: TurnoFijoWhereUniqueInput | TurnoFijoWhereUniqueInput[]
  }

  export type TurnoPuntualCreateNestedManyWithoutClienteInput = {
    create?: XOR<TurnoPuntualCreateWithoutClienteInput, TurnoPuntualUncheckedCreateWithoutClienteInput> | TurnoPuntualCreateWithoutClienteInput[] | TurnoPuntualUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TurnoPuntualCreateOrConnectWithoutClienteInput | TurnoPuntualCreateOrConnectWithoutClienteInput[]
    createMany?: TurnoPuntualCreateManyClienteInputEnvelope
    connect?: TurnoPuntualWhereUniqueInput | TurnoPuntualWhereUniqueInput[]
  }

  export type TurnoFijoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<TurnoFijoCreateWithoutClienteInput, TurnoFijoUncheckedCreateWithoutClienteInput> | TurnoFijoCreateWithoutClienteInput[] | TurnoFijoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TurnoFijoCreateOrConnectWithoutClienteInput | TurnoFijoCreateOrConnectWithoutClienteInput[]
    createMany?: TurnoFijoCreateManyClienteInputEnvelope
    connect?: TurnoFijoWhereUniqueInput | TurnoFijoWhereUniqueInput[]
  }

  export type TurnoPuntualUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<TurnoPuntualCreateWithoutClienteInput, TurnoPuntualUncheckedCreateWithoutClienteInput> | TurnoPuntualCreateWithoutClienteInput[] | TurnoPuntualUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TurnoPuntualCreateOrConnectWithoutClienteInput | TurnoPuntualCreateOrConnectWithoutClienteInput[]
    createMany?: TurnoPuntualCreateManyClienteInputEnvelope
    connect?: TurnoPuntualWhereUniqueInput | TurnoPuntualWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TurnoFijoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<TurnoFijoCreateWithoutClienteInput, TurnoFijoUncheckedCreateWithoutClienteInput> | TurnoFijoCreateWithoutClienteInput[] | TurnoFijoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TurnoFijoCreateOrConnectWithoutClienteInput | TurnoFijoCreateOrConnectWithoutClienteInput[]
    upsert?: TurnoFijoUpsertWithWhereUniqueWithoutClienteInput | TurnoFijoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: TurnoFijoCreateManyClienteInputEnvelope
    set?: TurnoFijoWhereUniqueInput | TurnoFijoWhereUniqueInput[]
    disconnect?: TurnoFijoWhereUniqueInput | TurnoFijoWhereUniqueInput[]
    delete?: TurnoFijoWhereUniqueInput | TurnoFijoWhereUniqueInput[]
    connect?: TurnoFijoWhereUniqueInput | TurnoFijoWhereUniqueInput[]
    update?: TurnoFijoUpdateWithWhereUniqueWithoutClienteInput | TurnoFijoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: TurnoFijoUpdateManyWithWhereWithoutClienteInput | TurnoFijoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: TurnoFijoScalarWhereInput | TurnoFijoScalarWhereInput[]
  }

  export type TurnoPuntualUpdateManyWithoutClienteNestedInput = {
    create?: XOR<TurnoPuntualCreateWithoutClienteInput, TurnoPuntualUncheckedCreateWithoutClienteInput> | TurnoPuntualCreateWithoutClienteInput[] | TurnoPuntualUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TurnoPuntualCreateOrConnectWithoutClienteInput | TurnoPuntualCreateOrConnectWithoutClienteInput[]
    upsert?: TurnoPuntualUpsertWithWhereUniqueWithoutClienteInput | TurnoPuntualUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: TurnoPuntualCreateManyClienteInputEnvelope
    set?: TurnoPuntualWhereUniqueInput | TurnoPuntualWhereUniqueInput[]
    disconnect?: TurnoPuntualWhereUniqueInput | TurnoPuntualWhereUniqueInput[]
    delete?: TurnoPuntualWhereUniqueInput | TurnoPuntualWhereUniqueInput[]
    connect?: TurnoPuntualWhereUniqueInput | TurnoPuntualWhereUniqueInput[]
    update?: TurnoPuntualUpdateWithWhereUniqueWithoutClienteInput | TurnoPuntualUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: TurnoPuntualUpdateManyWithWhereWithoutClienteInput | TurnoPuntualUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: TurnoPuntualScalarWhereInput | TurnoPuntualScalarWhereInput[]
  }

  export type TurnoFijoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<TurnoFijoCreateWithoutClienteInput, TurnoFijoUncheckedCreateWithoutClienteInput> | TurnoFijoCreateWithoutClienteInput[] | TurnoFijoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TurnoFijoCreateOrConnectWithoutClienteInput | TurnoFijoCreateOrConnectWithoutClienteInput[]
    upsert?: TurnoFijoUpsertWithWhereUniqueWithoutClienteInput | TurnoFijoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: TurnoFijoCreateManyClienteInputEnvelope
    set?: TurnoFijoWhereUniqueInput | TurnoFijoWhereUniqueInput[]
    disconnect?: TurnoFijoWhereUniqueInput | TurnoFijoWhereUniqueInput[]
    delete?: TurnoFijoWhereUniqueInput | TurnoFijoWhereUniqueInput[]
    connect?: TurnoFijoWhereUniqueInput | TurnoFijoWhereUniqueInput[]
    update?: TurnoFijoUpdateWithWhereUniqueWithoutClienteInput | TurnoFijoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: TurnoFijoUpdateManyWithWhereWithoutClienteInput | TurnoFijoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: TurnoFijoScalarWhereInput | TurnoFijoScalarWhereInput[]
  }

  export type TurnoPuntualUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<TurnoPuntualCreateWithoutClienteInput, TurnoPuntualUncheckedCreateWithoutClienteInput> | TurnoPuntualCreateWithoutClienteInput[] | TurnoPuntualUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TurnoPuntualCreateOrConnectWithoutClienteInput | TurnoPuntualCreateOrConnectWithoutClienteInput[]
    upsert?: TurnoPuntualUpsertWithWhereUniqueWithoutClienteInput | TurnoPuntualUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: TurnoPuntualCreateManyClienteInputEnvelope
    set?: TurnoPuntualWhereUniqueInput | TurnoPuntualWhereUniqueInput[]
    disconnect?: TurnoPuntualWhereUniqueInput | TurnoPuntualWhereUniqueInput[]
    delete?: TurnoPuntualWhereUniqueInput | TurnoPuntualWhereUniqueInput[]
    connect?: TurnoPuntualWhereUniqueInput | TurnoPuntualWhereUniqueInput[]
    update?: TurnoPuntualUpdateWithWhereUniqueWithoutClienteInput | TurnoPuntualUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: TurnoPuntualUpdateManyWithWhereWithoutClienteInput | TurnoPuntualUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: TurnoPuntualScalarWhereInput | TurnoPuntualScalarWhereInput[]
  }

  export type TurnoFijoCreatemodulosOcupadosInput = {
    set: string[]
  }

  export type ClienteCreateNestedOneWithoutFijosInput = {
    create?: XOR<ClienteCreateWithoutFijosInput, ClienteUncheckedCreateWithoutFijosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutFijosInput
    connect?: ClienteWhereUniqueInput
  }

  export type EnumCanchaFieldUpdateOperationsInput = {
    set?: $Enums.Cancha
  }

  export type EnumDiaFieldUpdateOperationsInput = {
    set?: $Enums.Dia
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TurnoFijoUpdatemodulosOcupadosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ClienteUpdateOneRequiredWithoutFijosNestedInput = {
    create?: XOR<ClienteCreateWithoutFijosInput, ClienteUncheckedCreateWithoutFijosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutFijosInput
    upsert?: ClienteUpsertWithoutFijosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutFijosInput, ClienteUpdateWithoutFijosInput>, ClienteUncheckedUpdateWithoutFijosInput>
  }

  export type TurnoPuntualCreatemodulosOcupadosInput = {
    set: string[]
  }

  export type ClienteCreateNestedOneWithoutPuntualInput = {
    create?: XOR<ClienteCreateWithoutPuntualInput, ClienteUncheckedCreateWithoutPuntualInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPuntualInput
    connect?: ClienteWhereUniqueInput
  }

  export type TurnoPuntualUpdatemodulosOcupadosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ClienteUpdateOneRequiredWithoutPuntualNestedInput = {
    create?: XOR<ClienteCreateWithoutPuntualInput, ClienteUncheckedCreateWithoutPuntualInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPuntualInput
    upsert?: ClienteUpsertWithoutPuntualInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPuntualInput, ClienteUpdateWithoutPuntualInput>, ClienteUncheckedUpdateWithoutPuntualInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TurnoRegistradoPorClienteCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TurnoRegistradoPorClienteCreateWithoutUsuarioInput, TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput> | TurnoRegistradoPorClienteCreateWithoutUsuarioInput[] | TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TurnoRegistradoPorClienteCreateOrConnectWithoutUsuarioInput | TurnoRegistradoPorClienteCreateOrConnectWithoutUsuarioInput[]
    createMany?: TurnoRegistradoPorClienteCreateManyUsuarioInputEnvelope
    connect?: TurnoRegistradoPorClienteWhereUniqueInput | TurnoRegistradoPorClienteWhereUniqueInput[]
  }

  export type TurnoRegistradoPorClienteUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TurnoRegistradoPorClienteCreateWithoutUsuarioInput, TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput> | TurnoRegistradoPorClienteCreateWithoutUsuarioInput[] | TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TurnoRegistradoPorClienteCreateOrConnectWithoutUsuarioInput | TurnoRegistradoPorClienteCreateOrConnectWithoutUsuarioInput[]
    createMany?: TurnoRegistradoPorClienteCreateManyUsuarioInputEnvelope
    connect?: TurnoRegistradoPorClienteWhereUniqueInput | TurnoRegistradoPorClienteWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type TurnoRegistradoPorClienteUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TurnoRegistradoPorClienteCreateWithoutUsuarioInput, TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput> | TurnoRegistradoPorClienteCreateWithoutUsuarioInput[] | TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TurnoRegistradoPorClienteCreateOrConnectWithoutUsuarioInput | TurnoRegistradoPorClienteCreateOrConnectWithoutUsuarioInput[]
    upsert?: TurnoRegistradoPorClienteUpsertWithWhereUniqueWithoutUsuarioInput | TurnoRegistradoPorClienteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TurnoRegistradoPorClienteCreateManyUsuarioInputEnvelope
    set?: TurnoRegistradoPorClienteWhereUniqueInput | TurnoRegistradoPorClienteWhereUniqueInput[]
    disconnect?: TurnoRegistradoPorClienteWhereUniqueInput | TurnoRegistradoPorClienteWhereUniqueInput[]
    delete?: TurnoRegistradoPorClienteWhereUniqueInput | TurnoRegistradoPorClienteWhereUniqueInput[]
    connect?: TurnoRegistradoPorClienteWhereUniqueInput | TurnoRegistradoPorClienteWhereUniqueInput[]
    update?: TurnoRegistradoPorClienteUpdateWithWhereUniqueWithoutUsuarioInput | TurnoRegistradoPorClienteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TurnoRegistradoPorClienteUpdateManyWithWhereWithoutUsuarioInput | TurnoRegistradoPorClienteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TurnoRegistradoPorClienteScalarWhereInput | TurnoRegistradoPorClienteScalarWhereInput[]
  }

  export type TurnoRegistradoPorClienteUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TurnoRegistradoPorClienteCreateWithoutUsuarioInput, TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput> | TurnoRegistradoPorClienteCreateWithoutUsuarioInput[] | TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TurnoRegistradoPorClienteCreateOrConnectWithoutUsuarioInput | TurnoRegistradoPorClienteCreateOrConnectWithoutUsuarioInput[]
    upsert?: TurnoRegistradoPorClienteUpsertWithWhereUniqueWithoutUsuarioInput | TurnoRegistradoPorClienteUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TurnoRegistradoPorClienteCreateManyUsuarioInputEnvelope
    set?: TurnoRegistradoPorClienteWhereUniqueInput | TurnoRegistradoPorClienteWhereUniqueInput[]
    disconnect?: TurnoRegistradoPorClienteWhereUniqueInput | TurnoRegistradoPorClienteWhereUniqueInput[]
    delete?: TurnoRegistradoPorClienteWhereUniqueInput | TurnoRegistradoPorClienteWhereUniqueInput[]
    connect?: TurnoRegistradoPorClienteWhereUniqueInput | TurnoRegistradoPorClienteWhereUniqueInput[]
    update?: TurnoRegistradoPorClienteUpdateWithWhereUniqueWithoutUsuarioInput | TurnoRegistradoPorClienteUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TurnoRegistradoPorClienteUpdateManyWithWhereWithoutUsuarioInput | TurnoRegistradoPorClienteUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TurnoRegistradoPorClienteScalarWhereInput | TurnoRegistradoPorClienteScalarWhereInput[]
  }

  export type TurnoRegistradoPorClienteCreatemodulosOcupadosInput = {
    set: string[]
  }

  export type UsuarioCreateNestedOneWithoutTurnosInput = {
    create?: XOR<UsuarioCreateWithoutTurnosInput, UsuarioUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurnosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TurnoRegistradoPorClienteUpdatemodulosOcupadosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UsuarioUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: XOR<UsuarioCreateWithoutTurnosInput, UsuarioUncheckedCreateWithoutTurnosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTurnosInput
    upsert?: UsuarioUpsertWithoutTurnosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTurnosInput, UsuarioUpdateWithoutTurnosInput>, UsuarioUncheckedUpdateWithoutTurnosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCanchaFilter<$PrismaModel = never> = {
    equals?: $Enums.Cancha | EnumCanchaFieldRefInput<$PrismaModel>
    in?: $Enums.Cancha[] | ListEnumCanchaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cancha[] | ListEnumCanchaFieldRefInput<$PrismaModel>
    not?: NestedEnumCanchaFilter<$PrismaModel> | $Enums.Cancha
  }

  export type NestedEnumDiaFilter<$PrismaModel = never> = {
    equals?: $Enums.Dia | EnumDiaFieldRefInput<$PrismaModel>
    in?: $Enums.Dia[] | ListEnumDiaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Dia[] | ListEnumDiaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaFilter<$PrismaModel> | $Enums.Dia
  }

  export type NestedEnumCanchaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Cancha | EnumCanchaFieldRefInput<$PrismaModel>
    in?: $Enums.Cancha[] | ListEnumCanchaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cancha[] | ListEnumCanchaFieldRefInput<$PrismaModel>
    not?: NestedEnumCanchaWithAggregatesFilter<$PrismaModel> | $Enums.Cancha
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCanchaFilter<$PrismaModel>
    _max?: NestedEnumCanchaFilter<$PrismaModel>
  }

  export type NestedEnumDiaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Dia | EnumDiaFieldRefInput<$PrismaModel>
    in?: $Enums.Dia[] | ListEnumDiaFieldRefInput<$PrismaModel>
    notIn?: $Enums.Dia[] | ListEnumDiaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaWithAggregatesFilter<$PrismaModel> | $Enums.Dia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaFilter<$PrismaModel>
    _max?: NestedEnumDiaFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type TurnoFijoCreateWithoutClienteInput = {
    id?: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    cantidadModulos: number
    horaFinaliza: string
    modulosOcupados?: TurnoFijoCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoFijoUncheckedCreateWithoutClienteInput = {
    id?: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    cantidadModulos: number
    horaFinaliza: string
    modulosOcupados?: TurnoFijoCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoFijoCreateOrConnectWithoutClienteInput = {
    where: TurnoFijoWhereUniqueInput
    create: XOR<TurnoFijoCreateWithoutClienteInput, TurnoFijoUncheckedCreateWithoutClienteInput>
  }

  export type TurnoFijoCreateManyClienteInputEnvelope = {
    data: TurnoFijoCreateManyClienteInput | TurnoFijoCreateManyClienteInput[]
  }

  export type TurnoPuntualCreateWithoutClienteInput = {
    id?: string
    fecha?: Date | string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoPuntualCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoPuntualUncheckedCreateWithoutClienteInput = {
    id?: string
    fecha?: Date | string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoPuntualCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoPuntualCreateOrConnectWithoutClienteInput = {
    where: TurnoPuntualWhereUniqueInput
    create: XOR<TurnoPuntualCreateWithoutClienteInput, TurnoPuntualUncheckedCreateWithoutClienteInput>
  }

  export type TurnoPuntualCreateManyClienteInputEnvelope = {
    data: TurnoPuntualCreateManyClienteInput | TurnoPuntualCreateManyClienteInput[]
  }

  export type TurnoFijoUpsertWithWhereUniqueWithoutClienteInput = {
    where: TurnoFijoWhereUniqueInput
    update: XOR<TurnoFijoUpdateWithoutClienteInput, TurnoFijoUncheckedUpdateWithoutClienteInput>
    create: XOR<TurnoFijoCreateWithoutClienteInput, TurnoFijoUncheckedCreateWithoutClienteInput>
  }

  export type TurnoFijoUpdateWithWhereUniqueWithoutClienteInput = {
    where: TurnoFijoWhereUniqueInput
    data: XOR<TurnoFijoUpdateWithoutClienteInput, TurnoFijoUncheckedUpdateWithoutClienteInput>
  }

  export type TurnoFijoUpdateManyWithWhereWithoutClienteInput = {
    where: TurnoFijoScalarWhereInput
    data: XOR<TurnoFijoUpdateManyMutationInput, TurnoFijoUncheckedUpdateManyWithoutClienteInput>
  }

  export type TurnoFijoScalarWhereInput = {
    AND?: TurnoFijoScalarWhereInput | TurnoFijoScalarWhereInput[]
    OR?: TurnoFijoScalarWhereInput[]
    NOT?: TurnoFijoScalarWhereInput | TurnoFijoScalarWhereInput[]
    id?: StringFilter<"TurnoFijo"> | string
    clienteId?: StringFilter<"TurnoFijo"> | string
    cancha?: EnumCanchaFilter<"TurnoFijo"> | $Enums.Cancha
    dia?: EnumDiaFilter<"TurnoFijo"> | $Enums.Dia
    horaComienzo?: StringFilter<"TurnoFijo"> | string
    cantidadModulos?: IntFilter<"TurnoFijo"> | number
    horaFinaliza?: StringFilter<"TurnoFijo"> | string
    modulosOcupados?: StringNullableListFilter<"TurnoFijo">
    createdAt?: DateTimeFilter<"TurnoFijo"> | Date | string
    updatedAt?: DateTimeFilter<"TurnoFijo"> | Date | string
  }

  export type TurnoPuntualUpsertWithWhereUniqueWithoutClienteInput = {
    where: TurnoPuntualWhereUniqueInput
    update: XOR<TurnoPuntualUpdateWithoutClienteInput, TurnoPuntualUncheckedUpdateWithoutClienteInput>
    create: XOR<TurnoPuntualCreateWithoutClienteInput, TurnoPuntualUncheckedCreateWithoutClienteInput>
  }

  export type TurnoPuntualUpdateWithWhereUniqueWithoutClienteInput = {
    where: TurnoPuntualWhereUniqueInput
    data: XOR<TurnoPuntualUpdateWithoutClienteInput, TurnoPuntualUncheckedUpdateWithoutClienteInput>
  }

  export type TurnoPuntualUpdateManyWithWhereWithoutClienteInput = {
    where: TurnoPuntualScalarWhereInput
    data: XOR<TurnoPuntualUpdateManyMutationInput, TurnoPuntualUncheckedUpdateManyWithoutClienteInput>
  }

  export type TurnoPuntualScalarWhereInput = {
    AND?: TurnoPuntualScalarWhereInput | TurnoPuntualScalarWhereInput[]
    OR?: TurnoPuntualScalarWhereInput[]
    NOT?: TurnoPuntualScalarWhereInput | TurnoPuntualScalarWhereInput[]
    id?: StringFilter<"TurnoPuntual"> | string
    fecha?: DateTimeFilter<"TurnoPuntual"> | Date | string
    clienteId?: StringFilter<"TurnoPuntual"> | string
    cancha?: EnumCanchaFilter<"TurnoPuntual"> | $Enums.Cancha
    dia?: EnumDiaFilter<"TurnoPuntual"> | $Enums.Dia
    horaComienzo?: StringFilter<"TurnoPuntual"> | string
    horaFinaliza?: StringFilter<"TurnoPuntual"> | string
    cantidadModulos?: IntFilter<"TurnoPuntual"> | number
    modulosOcupados?: StringNullableListFilter<"TurnoPuntual">
    createdAt?: DateTimeFilter<"TurnoPuntual"> | Date | string
    updatedAt?: DateTimeFilter<"TurnoPuntual"> | Date | string
  }

  export type ClienteCreateWithoutFijosInput = {
    id?: string
    email: string
    telefono: string
    nombre: string
    dni?: string
    informacion?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    puntual?: TurnoPuntualCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutFijosInput = {
    id?: string
    email: string
    telefono: string
    nombre: string
    dni?: string
    informacion?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    puntual?: TurnoPuntualUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutFijosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutFijosInput, ClienteUncheckedCreateWithoutFijosInput>
  }

  export type ClienteUpsertWithoutFijosInput = {
    update: XOR<ClienteUpdateWithoutFijosInput, ClienteUncheckedUpdateWithoutFijosInput>
    create: XOR<ClienteCreateWithoutFijosInput, ClienteUncheckedCreateWithoutFijosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutFijosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutFijosInput, ClienteUncheckedUpdateWithoutFijosInput>
  }

  export type ClienteUpdateWithoutFijosInput = {
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    informacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    puntual?: TurnoPuntualUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutFijosInput = {
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    informacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    puntual?: TurnoPuntualUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateWithoutPuntualInput = {
    id?: string
    email: string
    telefono: string
    nombre: string
    dni?: string
    informacion?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fijos?: TurnoFijoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPuntualInput = {
    id?: string
    email: string
    telefono: string
    nombre: string
    dni?: string
    informacion?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fijos?: TurnoFijoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutPuntualInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPuntualInput, ClienteUncheckedCreateWithoutPuntualInput>
  }

  export type ClienteUpsertWithoutPuntualInput = {
    update: XOR<ClienteUpdateWithoutPuntualInput, ClienteUncheckedUpdateWithoutPuntualInput>
    create: XOR<ClienteCreateWithoutPuntualInput, ClienteUncheckedCreateWithoutPuntualInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPuntualInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPuntualInput, ClienteUncheckedUpdateWithoutPuntualInput>
  }

  export type ClienteUpdateWithoutPuntualInput = {
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    informacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fijos?: TurnoFijoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPuntualInput = {
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    informacion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fijos?: TurnoFijoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type TurnoRegistradoPorClienteCreateWithoutUsuarioInput = {
    id?: string
    fecha?: Date | string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoRegistradoPorClienteCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput = {
    id?: string
    fecha?: Date | string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoRegistradoPorClienteCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoRegistradoPorClienteCreateOrConnectWithoutUsuarioInput = {
    where: TurnoRegistradoPorClienteWhereUniqueInput
    create: XOR<TurnoRegistradoPorClienteCreateWithoutUsuarioInput, TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput>
  }

  export type TurnoRegistradoPorClienteCreateManyUsuarioInputEnvelope = {
    data: TurnoRegistradoPorClienteCreateManyUsuarioInput | TurnoRegistradoPorClienteCreateManyUsuarioInput[]
  }

  export type TurnoRegistradoPorClienteUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: TurnoRegistradoPorClienteWhereUniqueInput
    update: XOR<TurnoRegistradoPorClienteUpdateWithoutUsuarioInput, TurnoRegistradoPorClienteUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TurnoRegistradoPorClienteCreateWithoutUsuarioInput, TurnoRegistradoPorClienteUncheckedCreateWithoutUsuarioInput>
  }

  export type TurnoRegistradoPorClienteUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: TurnoRegistradoPorClienteWhereUniqueInput
    data: XOR<TurnoRegistradoPorClienteUpdateWithoutUsuarioInput, TurnoRegistradoPorClienteUncheckedUpdateWithoutUsuarioInput>
  }

  export type TurnoRegistradoPorClienteUpdateManyWithWhereWithoutUsuarioInput = {
    where: TurnoRegistradoPorClienteScalarWhereInput
    data: XOR<TurnoRegistradoPorClienteUpdateManyMutationInput, TurnoRegistradoPorClienteUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TurnoRegistradoPorClienteScalarWhereInput = {
    AND?: TurnoRegistradoPorClienteScalarWhereInput | TurnoRegistradoPorClienteScalarWhereInput[]
    OR?: TurnoRegistradoPorClienteScalarWhereInput[]
    NOT?: TurnoRegistradoPorClienteScalarWhereInput | TurnoRegistradoPorClienteScalarWhereInput[]
    id?: StringFilter<"TurnoRegistradoPorCliente"> | string
    fecha?: DateTimeFilter<"TurnoRegistradoPorCliente"> | Date | string
    usuarioId?: StringFilter<"TurnoRegistradoPorCliente"> | string
    cancha?: EnumCanchaFilter<"TurnoRegistradoPorCliente"> | $Enums.Cancha
    dia?: EnumDiaFilter<"TurnoRegistradoPorCliente"> | $Enums.Dia
    horaComienzo?: StringFilter<"TurnoRegistradoPorCliente"> | string
    horaFinaliza?: StringFilter<"TurnoRegistradoPorCliente"> | string
    cantidadModulos?: IntFilter<"TurnoRegistradoPorCliente"> | number
    modulosOcupados?: StringNullableListFilter<"TurnoRegistradoPorCliente">
    createdAt?: DateTimeFilter<"TurnoRegistradoPorCliente"> | Date | string
    updatedAt?: DateTimeFilter<"TurnoRegistradoPorCliente"> | Date | string
  }

  export type UsuarioCreateWithoutTurnosInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorSecret: string
    twoFactorActivated?: boolean
    role?: $Enums.Role
    tokenDeVerificacion?: string | null
    cuentaVerificada?: boolean
  }

  export type UsuarioUncheckedCreateWithoutTurnosInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    twoFactorSecret: string
    twoFactorActivated?: boolean
    role?: $Enums.Role
    tokenDeVerificacion?: string | null
    cuentaVerificada?: boolean
  }

  export type UsuarioCreateOrConnectWithoutTurnosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTurnosInput, UsuarioUncheckedCreateWithoutTurnosInput>
  }

  export type UsuarioUpsertWithoutTurnosInput = {
    update: XOR<UsuarioUpdateWithoutTurnosInput, UsuarioUncheckedUpdateWithoutTurnosInput>
    create: XOR<UsuarioCreateWithoutTurnosInput, UsuarioUncheckedCreateWithoutTurnosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTurnosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTurnosInput, UsuarioUncheckedUpdateWithoutTurnosInput>
  }

  export type UsuarioUpdateWithoutTurnosInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorSecret?: StringFieldUpdateOperationsInput | string
    twoFactorActivated?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokenDeVerificacion?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaVerificada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateWithoutTurnosInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    twoFactorSecret?: StringFieldUpdateOperationsInput | string
    twoFactorActivated?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    tokenDeVerificacion?: NullableStringFieldUpdateOperationsInput | string | null
    cuentaVerificada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TurnoFijoCreateManyClienteInput = {
    id?: string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    cantidadModulos: number
    horaFinaliza: string
    modulosOcupados?: TurnoFijoCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoPuntualCreateManyClienteInput = {
    id?: string
    fecha?: Date | string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoPuntualCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoFijoUpdateWithoutClienteInput = {
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    modulosOcupados?: TurnoFijoUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoFijoUncheckedUpdateWithoutClienteInput = {
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    modulosOcupados?: TurnoFijoUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoFijoUncheckedUpdateManyWithoutClienteInput = {
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    modulosOcupados?: TurnoFijoUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoPuntualUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoPuntualUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoPuntualUncheckedUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoPuntualUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoPuntualUncheckedUpdateManyWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoPuntualUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoRegistradoPorClienteCreateManyUsuarioInput = {
    id?: string
    fecha?: Date | string
    cancha: $Enums.Cancha
    dia: $Enums.Dia
    horaComienzo: string
    horaFinaliza: string
    cantidadModulos: number
    modulosOcupados?: TurnoRegistradoPorClienteCreatemodulosOcupadosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TurnoRegistradoPorClienteUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoRegistradoPorClienteUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoRegistradoPorClienteUncheckedUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoRegistradoPorClienteUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnoRegistradoPorClienteUncheckedUpdateManyWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cancha?: EnumCanchaFieldUpdateOperationsInput | $Enums.Cancha
    dia?: EnumDiaFieldUpdateOperationsInput | $Enums.Dia
    horaComienzo?: StringFieldUpdateOperationsInput | string
    horaFinaliza?: StringFieldUpdateOperationsInput | string
    cantidadModulos?: IntFieldUpdateOperationsInput | number
    modulosOcupados?: TurnoRegistradoPorClienteUpdatemodulosOcupadosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}